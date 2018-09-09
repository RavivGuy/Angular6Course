import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverName = '';
    serverStatus = 'offline';
    details = 'password = tuna';
    isDisplayDetails = false;
    toggleDisplayDetailesDescreption;
    clicksArray = [];

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.updateToggleDisplayDetailesDescreption();
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

    getDetails() {
        return this.details;
    }

    toggleDisplayDetails() {
        if (this.isDisplayDetails) {
            this.isDisplayDetails = false;
            this.clicksArray.push('Undisplay details in ' + Date.now());
        } else {
            this.isDisplayDetails = true;
            this.clicksArray.push('Display details in ' + Date.now());
        }

        this.updateToggleDisplayDetailesDescreption();
    }

    updateToggleDisplayDetailesDescreption() {
        if (this.isDisplayDetails) {
            this.toggleDisplayDetailesDescreption = 'Undisplay detailes';
        } else {
            this.toggleDisplayDetailesDescreption = 'Display detailes';
        }
    }
}
