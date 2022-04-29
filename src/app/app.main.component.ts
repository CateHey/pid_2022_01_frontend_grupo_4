import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app.main',
  templateUrl: './app.main.component.html'
})
export class AppMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem("usuarioActual");
    this.router.navigate([""]);
  }

}