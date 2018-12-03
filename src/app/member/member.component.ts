import { Component, OnInit, Input } from '@angular/core'
import { MemberService, Members } from '../member.service'
import {
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms'

declare var M: any
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  topupForm: boolean
  showAddMemberForm: boolean
  addMemberForm: FormGroup
  updateForm: boolean
  tableData: Members[] = []

  constructor(
    private _member: MemberService,
    private formBuilder: FormBuilder
  ) {
    this.addMemberForm = this.formBuilder.group({
      _id: [null, Validators.nullValidator],
      room: ['', Validators.required],
      membername: ['', Validators.required],
      mail: ['', [Validators.email]],
      tel: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      credit: ['', [Validators.maxLength(3), Validators.required]]
    })
  }

  ngOnInit() {
    this.getmember()
    this.resetAddForm()
    this.topupForm = false
    this.updateForm = false
    this.showAddMemberForm = false
  }

  getmember() {
    this._member.getmember().subscribe(
      data => {
        console.log(data)
        this.tableData = data['msg']
      },
      error => {
        console.log(error)
      }
    )
  }
  doDelete(ref) {
    console.log(ref.rowData._id)
    this._member.deletemember(ref.rowData._id).subscribe(
      data => {
        console.log(data)
        this.tableData.splice(this.tableData.indexOf(ref.rowData._id), 1)
        M.toast({ html: 'Deleted successfully', classes: 'rounded' })
      },
      error => {
        console.log(error)
      }
    )
  }

  showTopupForm(scope) {
    this.addMemberForm.setValue({
      room: scope.rowData.room,
      membername: scope.rowData.membername,
      tel: scope.rowData.tel,
      mail: scope.rowData.mail,
      password: '',
      credit: scope.rowData.credit,
      _id: scope.rowData._id
    })
    console.log(this.addMemberForm.value)
    this.topupForm = true
    console.log(this.addMemberForm)
  }

  showUpdateForm(scope) {
    this.addMemberForm.setValue({
      room: scope.rowData.room,
      membername: scope.rowData.membername,
      tel: scope.rowData.tel,
      mail: scope.rowData.mail,
      password: scope.rowData.password,
      credit: scope.rowData.credit,
      _id: scope.rowData._id
    })
    console.log(this.addMemberForm.value)
    this.updateForm = true
    console.log(this.addMemberForm)
  }

  addMember() {
    this.resetAddForm()
    this.showAddMemberForm = true
  }
  addMemberAction() {
    if (!this.addMemberForm.valid) {
      console.log(this.addMemberForm.value)
      alert('The Form is unavailable')
      return
    }
    this._member.memberadd(JSON.stringify(this.addMemberForm.value)).subscribe(
      data => {
        console.log(data)
        this.getmember()
        this.showAddMemberForm = false
        this.resetAddForm()
        M.toast({ html: 'Saved successfully', classes: 'rounded' })
      },
      error => console.error(error)
    )
  }
  resetAddForm() {
    this.addMemberForm.reset()
  }
  topUp() {
    this._member
      .topUp(
        this.addMemberForm.value._id,
        JSON.stringify(this.addMemberForm.value)
      )
      .subscribe(
        data => {
          console.log(data)
          this.getmember()
          this.topupForm = false
          M.toast({ html: 'Topup successfully', classes: 'rounded' })
        },
        error => console.error(error)
      )
  }

  updateMemberAction() {
    console.log(this.addMemberForm.value._id)
    if (!this.addMemberForm.dirty) {
      alert('The Form is unchange')
      return
    }
    this._member
      .updatemember(
        this.addMemberForm.value._id,
        JSON.stringify(this.addMemberForm.value)
      )
      .subscribe(
        data => {
          console.log(data)
          this.getmember()
          this.updateForm = false
          M.toast({ html: 'Edited successfully', classes: 'rounded' })
        },
        error => {
          console.error(error)
        }
      )
  }
}
