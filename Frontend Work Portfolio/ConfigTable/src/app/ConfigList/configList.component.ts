import { Component} from '@angular/core';
import DeathConfigJson from 'src/app/DeathConfig.json';
import {Router} from '@angular/router';

interface CONFIGS{
  ID: String;
  Key: String;
  Scope: String;
  Value: String; 
  Notes: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './configList.component.html',
  styleUrls: ['./configList.component.css']
})
export class ConfigListComponent {
  Configs: CONFIGS[] = DeathConfigJson;
  constructor(private router:Router){
    console.log(this.Configs);    
  }
  /*
  getConfigID(){
    this.route.params.subscribe((params) => {this.id = params["id"]});
  }
  */
  onAdd(){
    console.log("add");
    this.router.navigate(["configuration-fields/edit"]);
  }

  onKeyFieldClick(configId){
    console.log("edit");
    this.router.navigate(["configuration-fields/edit/"+configId]);
  }
}