import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app-security/auth.service';

@Component({
  template: `
  <div class="row">
    <div class="col-12">
      <h1 class="mb-3">{{'navbar.user' | translate}}</h1>

      <div class="row">
        <div class="col-lg-4 mb-3 mb-md-0" *ngIf="authService.getLoginStatus() | async">
          <ul class="ptk-inline-nav">
            <li class="float-left float-lg-none">
              <a [routerLink]="['/user/add']" routerLinkActive="ptk-active">{{'navbar.addUser' | translate}}</a>
            </li>
            <li class="float-left float-lg-none">
              <a [routerLink]="['/user/modify']" routerLinkActive="ptk-active">{{'navbar.modifyUser' | translate}}</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-8">
          <router-outlet></router-outlet>
        </div>
    </div>
  </div>
  `,
  styles: []
})
export class UserComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
