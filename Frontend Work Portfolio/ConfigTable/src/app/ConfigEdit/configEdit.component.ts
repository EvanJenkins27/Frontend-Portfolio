import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import DeathConfigJson from 'src/app/DeathConfig.json';
@Component({
  selector: 'app-root',
  templateUrl: 'configEdit.component.html',
  styleUrls: ['configEdit.component.css']
})
export class ConfigEditComponent {
  private configId;
  private dcJson = JSON.stringify(DeathConfigJson);
  public currObj;
  constructor(private router:Router,private route:ActivatedRoute){ //called @ very beginning no matter what
    this.getParamDetails();
    if(this.configId != null)
      this.parseConfigObj();
  }

  parseConfigObj(){
    this.currObj = JSON.parse(this.dcJson);
    this.currObj = this.currObj[this.configId-1];
    console.log(this.currObj);
  }
  
  getParamDetails(){
    //can wrap in funciton that converts nulls to blanks (ex. eliminateNulls(param){if param = null, return blank, else return param})
    this.route.params.subscribe((params) => {this.configId = params["configId"]});
  }
  
  onSave(){
    console.log("Saving information for Config ID=" + this.configId);
    this.router.navigate(['configuration-fields']);
  }

  onDelete(){
    console.log("Deleting information for Config ID=" + this.configId);
    this.router.navigate(['configuration-fields']);
  }

  onCancel(){
    this.router.navigate(['configuration-fields']);
  }
  //define all funcitons for on save, delete, cancel, etc. 

}
