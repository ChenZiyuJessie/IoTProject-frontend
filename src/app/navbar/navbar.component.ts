import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: String = ''
  showUsername: boolean
  showHome: boolean
  showReport: boolean
  showLogin: boolean
  showLogout: boolean

  constructor(
    private _user: UserService,
    private _router: Router
  ) {
    this._user.user().subscribe(
      data => {
        this.addName(data)
        this.showUsername = true
        this.showHome = true
        this.showReport = true
        this.showLogin = true
        this.showLogout = true
      },
      error => this._router.navigate(['/login'])
    )
  }

  login(){
    this._router.navigate(['/login'])
    this.showUsername = false
    this.showHome = false
    this.showReport = false
    this.showLogin = false
    this.showLogout = false
  }

  addName(data) {
    this.username = data.username
    console.log(data)
  }
  ngOnInit() {
    this.addName(this.username)
    this.showUsername = false
    this.showHome = false
    this.showReport = false
    this.showLogin = false
    this.showLogout = false
  }


  logout() {
    this._user.logout().subscribe(
      data => {
        console.log(data)
        this._router.navigate(['/login'])
        this.showUsername = false
        this.showHome = false
        this.showReport = false
        this.showLogin = false
        this.showLogout = false
      },
      error => console.error(error)
    )
  }
}
