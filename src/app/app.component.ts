import { Component } from '@angular/core';
import * as io from "socket.io-client";
import { base_url } from './factory/environment/variables';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socket: io.Socket;
  constructor() {}
  ngOnInit() {
    $.growl.notice({
      title: "<b style='color:black;'>Acceso correcto</b>",
      message:"<b style='color:black;'>Bienvenido</b>",
      location: "br",
      duration: 5000,
      size:"large",
      style:"notice"
    });
    this.socket = io.connect(base_url);
    this.socket.on("notification", data => {
      console.log(data.msm);
      $.growl.warning({
        title: "<b style='color:black;'>Atención</b>",
        message: "<b style='color:black;'>"+data.msm+"</b>",
        location: "br",
        duration: 10000,
        size: "large",
        style: "warning"
      });
    });
  }
}
