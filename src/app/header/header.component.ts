import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed: boolean;

  constructor() {
    this.setCollapsed();
  }

  ngOnInit(): void {
  }

  setCollapsed(): void {
    this.collapsed = true;
  }

  switchCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
