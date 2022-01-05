import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {scroll} from "../../../assets/utilities";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges {
  @Input() flag !:boolean;
  share_eng: string = "We'll never share your email with anyone else.";
  share_ita: string = "Non condivideremo mai la tua email con nessun altro.";

  name = new FormControl('');
  msg = new FormControl('');
  email = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.flag = this.flag !== null ? this.flag : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.flag = changes.flag.currentValue;
  }

  scrollCont(str: string) {
    scroll(str);
  }

  sendEmail(e: Event) {
    e.preventDefault();
    this.name.reset();
    this.msg.reset();
    this.email.reset();

  }
}
