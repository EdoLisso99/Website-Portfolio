import { Component, OnInit } from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollCont(str: string) {
    scroll(str);
  }
}
