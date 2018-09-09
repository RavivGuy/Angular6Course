import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
      color: white;
  }`]
})
export class ServerComponent {
  serverId = 10;
  serverName = '';
  serverStatus = 'offline';

  constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerName() {
      return this.serverName;
  }

  setServerName(serverName) {
      this.serverName = serverName;
  }
}
