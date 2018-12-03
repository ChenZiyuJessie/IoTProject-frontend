import { Component, OnInit } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  labels: any[]

  constructor(private db: AngularFireDatabase) {
    db.list('/dnt')
      .valueChanges()
      .subscribe(labels => {
        this.labels = labels
        console.log(this.labels)
      })
  }

  ngOnInit() {}
}
