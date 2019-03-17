import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public toggle: boolean = true;
  public i: number = 0;
  public arrClick: Array<any> = new Array();

  constructor() { }

  ngOnInit() {
  }

  doToggle() {

    this.toggle = !this.toggle;

    let style = {
      backgroundColor: this.i > 3 ? 'blue' : ''
    };
    let clas = {
      'white-color': this.i > 3
    };
    let tup: [string, any, any] = ['click # ' + ++this.i, style, clas];
    this.arrClick.push(tup);
  }

}
