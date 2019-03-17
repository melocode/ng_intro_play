import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public toggle: boolean = true;
  public arrClick = [];

  constructor() { }

  ngOnInit() {
  }

  doToggle() {
    this.toggle = !this.toggle;
    this.arrClick.push(new Date());
  }

}
