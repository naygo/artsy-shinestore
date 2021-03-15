import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.userService.login(email, password).subscribe(() => {
      console.log('logou');
    });
  }

  voltar() {
    this.router.navigate(['/'], { fragment: 'topo' } );
  }

}
