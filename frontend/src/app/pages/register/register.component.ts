import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register() {
    const name = this.form.get('name').value;
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.userService.register(name, email, password).subscribe(() => {
      console.log('registrou');
    });
  }

  voltar() {
    this.router.navigate(['/'], { fragment: 'topo' } );
  }

}
