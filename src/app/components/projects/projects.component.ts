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
}
