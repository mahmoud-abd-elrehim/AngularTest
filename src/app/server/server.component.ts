import { Component } from '@angular/core';

@Component({

  selector:'server-app',//define as element
 //   selector:'[server-app]', // define as property
  //    selector:'.server-app', // define as class
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']


})
export class ServerComponent{
    serverId:number=10;
    serverStatus='offline';
    allowNewServer:boolean=false;
    serverCreation="No the server was created";
    serverName="";
    serverCreated=false
    
    getServerStatus():string{

        return this.serverStatus;
    }
    constructor(){
      
        setTimeout(() => {
            this.allowNewServer=true;
        }, 2000);
    }

    OnServerCreation(){
        this.serverCreated=true;
        this.serverCreation="the server was created" + this.serverName;
    }

    OnUpdateServer(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }

}