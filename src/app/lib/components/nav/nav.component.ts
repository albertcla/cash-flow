import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nav',
  template: `
    <nav>
      <cf-title></cf-title>
    </nav>
  `,
  styles: [
    `
    nav{
      border-bottom: .1rem solid;
    }
    `
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
