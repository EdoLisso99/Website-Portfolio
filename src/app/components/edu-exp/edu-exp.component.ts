import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.scss']
})
export class EduExpComponent implements OnInit, OnChanges {
  @Input() flag !:boolean;
  edu_title_1_eng: string = "Bachelor's degree in computer science";
  edu_title_1_ita: string = "Laurea triennale in informatica";
  edu_title_2_eng: string = "Electronic diploma";
  edu_title_2_ita: string = "Diploma in Elettronica";
  edu_istitute_1_eng: string = "University of Milan-Bicocca";
  edu_istitute_1_ita: string = "Università di Milano Bicocca";
  edu_date_1_eng: string = "October 2018 - July 2021";
  edu_date_1_ita: string = "Ottobre 2018 - Luglio 2021";
  edu_date_2_eng: string = "September 2013 - July 2018";
  edu_date_2_ita: string = "Settembre 2013 - Luglio 2018";
  exp_eng: string = "Junior Full Stack Developer";
  exp_ita: string = "Sviluppatore Full Stack Junior";
  add_eng: string = "(Consultant)";
  add_ita: string = "(Consulenza)";

  constructor() { }

  ngOnInit(): void {
    this.flag = this.flag !== null ? this.flag : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.flag = changes.flag.currentValue;
  }

  scrollEdEx(str: string) {
    scroll(str);
  }
}
