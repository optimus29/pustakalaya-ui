import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="row">
    <div class="col-md-10 col-lg-8 mx-auto">
      <h1 class="mb-3">{{'navbar.book' | translate}}</h1>
      
      <div class="row">
        <div class="col-12">
          <ul class="ptk-inline-nav">
            <li>
              <a [routerLink]="['/book/assign']" routerLinkActive="ptk-active">{{'navbar.assignBook' | translate}}</a>
            </li>
            <li>
              <a [routerLink]="['/book/return']" routerLinkActive="ptk-active">{{'navbar.returnBook' | translate}}</a>
            </li>
            <li>
              <a [routerLink]="['/book/add']" routerLinkActive="ptk-active">{{'navbar.addBook' | translate}}</a>
            </li>
            <li>
              <a [routerLink]="['/book/remove']" routerLinkActive="ptk-active">{{'navbar.removeBook' | translate}}</a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class BookComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
