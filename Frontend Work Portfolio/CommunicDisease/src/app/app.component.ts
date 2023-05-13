import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CommunicDisease';

  viralHemorrChecked(){
    var cb = document.getElementById("CommunicHemorrhagic") as HTMLInputElement; 
    var warning = document.getElementById("warning");
    if(!(warning == null)){
      if(cb.checked == true)
        warning.style.display = "inline";
      else 
        warning.style.display = "none";
    }
  }

  otherBoxChecked(){
    var cb =  document.getElementById("CommunicOther") as HTMLInputElement;
    var box = document.getElementById("CommunicOtherBox");

    if(!(box == null)){
      if(cb.checked == true)
        box.style.display = "block";
      else
        box.style.display = "none";
    }
  }

  noneBoxChecked(){
    var cb = document.getElementById("none") as HTMLInputElement;
    var form = document.getElementById("communicChecks"); 

    if(!(form == null)){
      if(cb.checked == true)
        form.style.display = "none";
      else
        form.style.display = "block";
    }
  }
}


