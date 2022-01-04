import { Component, OnInit } from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.scss']
})
export class EduExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollEdEx(str: string) {
    scroll(str);
  }
}
