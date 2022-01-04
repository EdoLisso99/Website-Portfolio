import { Component, OnInit } from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollProj(str: string) {
    scroll(str);
  }
}
