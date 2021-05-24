import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.authService
      .authenticate(email, password)
      .subscribe(
        () => {
          const typeUser = this.userService.getTypeProfile();

          typeUser === 'Admin'
            ? this.router.navigate(['admin/inicio'])
            : this.router.navigate(['cliente/inicio']);
        },
        err => {
          console.log(err);
        }
      );
  }

  voltar() {
    this.router.navigate(['/'], { fragment: 'topo' } );
  }

}
