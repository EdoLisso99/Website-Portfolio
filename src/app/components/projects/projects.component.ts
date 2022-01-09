import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnChanges {
  @Input() flag !:boolean;

  constructor() { }

  ngOnInit(): void {
    this.flag = this.flag !== null ? this.flag : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.flag = changes.flag.currentValue;
  }

  scrollProj(str: string) {
    scroll(str);
  }

  showWIP() {
    alert(this.flag ?
      "L'applicazione selezionata non è visualizzabile (non per mia scelta).\nSto attualmente lavorando per creare una nuova sezione in cui si potranno visualizzare tutti i progetti" :
      "The chosen application cannot be shown (not for my choice). \nI'm currently working for creating a new section in which i can display all the projects done!");

  }

}
