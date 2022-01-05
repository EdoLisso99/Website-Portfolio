import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit, OnChanges {
  @Input() flag !:boolean;
  @Output() flagEvent = new EventEmitter<boolean>();

  flagLocation: string = "assets/icons/UK.png";
  title_eng: string = "Hi, my name is ";
  title_ita: string = "Ciao, il mio nome è ";
  intro_eng : string = "I'm a Junior Developer based outside Milan.";
  intro_ita : string = "Sono uno sviluppatore Junior che vive fuori Lecco.";
  want_eng: string = "Want to know more?";
  want_ita: string = "Vuoi sapere di più?";
  start_eng: string = "Start";
  start_ita: string = "Inizia a";
  scroll_eng: string = "scrolling";
  scroll_ita: string = "scorrere";

  constructor() { }

  ngOnInit(): void {
    this.flag = this.flag !== null ? this.flag : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.flag = changes.flag.currentValue;
    if(!this.flag){
      this.flagLocation = "assets/icons/UK.png";
    }
    else {
      this.flagLocation = "assets/icons/italy.png";
    }
  }

  scrollFirst(str: string) {
    scroll(str);
  }

  changeFlag() {

    this.flagEvent.emit(!this.flag);
  }
}
