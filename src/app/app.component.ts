import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag:boolean = false;

  changeFlagValue(newValue : boolean){
    this.flag = newValue;
  }

}
