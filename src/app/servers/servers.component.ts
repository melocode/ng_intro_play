import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',  //for apps, normally use css selectors
  // selector: '[app-servers]',  //css element surrounded by []
  // selector: '.app-servers', //css class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created.';
  serverName: string = 'initial server name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  //start methods with "on" to indicate that the user is going to act on it
  //via the template.
  onCreateServer() {
    this.serverCreationStatus = 'The server was created with the following name: ' + "'" + this.serverName + "'";
  }

  onUpdateServerName(event: Event) {
    //console.log(event);

    //Need to typecast as HTMLInputElement for the 'value' property.
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
