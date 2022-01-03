import { Component, OnInit } from '@angular/core';
import {scroll} from "../../../assets/utilities";


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollAbout(i: number) {
    scroll(i);
  }
}
