import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() telaLogin;

  profile: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.profile = this.userService.getTypeProfile()
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
