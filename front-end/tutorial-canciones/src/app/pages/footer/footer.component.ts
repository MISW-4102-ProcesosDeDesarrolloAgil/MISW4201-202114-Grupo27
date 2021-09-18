import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ColDatePipe } from '../../pipes/colDate.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public currentDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
