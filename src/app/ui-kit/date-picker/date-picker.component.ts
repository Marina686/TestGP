import { Component, OnInit } from '@angular/core'; 
import {NgbCalendar, NgbDate} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  fromDate: NgbDate;
  toDate: NgbDate;
  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

  ngOnInit(): void {
   
  }

}
