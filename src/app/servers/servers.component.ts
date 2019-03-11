import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //for apps, normally use css selectors
  // selector: '[app-servers]',  //css element surrounded by []
  // selector: '.app-servers', //css class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
