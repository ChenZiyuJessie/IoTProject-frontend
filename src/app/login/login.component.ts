import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { UserService } from '../user.service'
declare var M: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showRegisterForm: boolean
  registerForm: FormGroup
  loading: boolean

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(
    private _router: Router,
    private _user: UserService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      cpass: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.showRegisterForm = false
    this.loading = false
    this.resetForm()
  }

  moveToRegister() {
    this.resetForm()
    this.showRegisterForm = true
  }

  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid')
      return
    }
    this.loading = true
    this._user.login(JSON.stringify(this.loginForm.value)).subscribe(
      data => {
        console.log(data)
        M.toast({ html: 'Login successfully', classes: 'rounded' })
        this._router.navigate(['/member'])
        window.location.reload()
      },
      error => {
        console.log(error)
        M.toast({ html: 'Invalid account or password', classes: 'rounded' })
        this.loading = false
      }
    )
  }

  resetForm() {
    this.registerForm.reset()
  }
  register() {
    var ans = confirm('Please input same password')
    if (ans) {
      if (
        !this.registerForm.valid ||
        this.registerForm.controls.password.value !=
          this.registerForm.controls.cpass.value
      ) {
        console.log('Invalid Form')
        return
      }
    }

    this._user.register(JSON.stringify(this.registerForm.value)).subscribe(
      data => {
        console.log(data)
        this.showRegisterForm = false
        this.resetForm()
        M.toast({ html: 'Register successfully', classes: 'rounded' })
      },
      error => console.error(error)
    )
  }
}
