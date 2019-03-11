import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  private _serverStatus: string = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getServerStatus(): string {
    return this._serverStatus;
  }
}
