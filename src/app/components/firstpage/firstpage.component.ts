import { Component, OnInit } from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollFirst(str: string) {
    scroll(str);
  }
}
