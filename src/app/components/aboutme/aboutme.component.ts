import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {scroll} from "../../../assets/utilities";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, OnChanges {
  @Input() flag !:boolean;

  title_eng: string = "About me";
  title_ita: string = "Su di me";
  show_875_eng: string = "I am a developer who enjoys working both in front-end and back-end development";
  show_875_ita: string = "Sono uno sviluppatore a cui piace lavorare sia sullo sviluppo front-end che back-end";
  show_875_all_eng: string = this.show_875_eng + ", although during my short career I have worked less on the latter.";
  show_875_all_ita: string = this.show_875_ita + ", sebbene durante la mia breve carriera abbia lavorato meno su quest'ultimo.";
  project_eng: string = "I am a person who learns more by working on projects rather than just studying the theoretical part.\n" +
    "I enjoy creating functional websites that have a simple and clean design.";
  project_ita: string = "Sono una persona che impara meglio lavorando su dei progetti pratici piuttosto che studiando solamente la parte teorica.\n" +
    "Mi diverto a creare siti web funzionali che hanno un design semplice e pulito."
  learn_eng: string = "Alongside my undergraduate computer science studies i learned HTML, CSS and Javascript on my own.\n" +
    "As time went by, i've made a couple of web sites and web app using React and React-Native, always self-taught.\n" +
    "After the bachelor's degree i learned how to develop websites using Angular, Spring and MySql together."
  learn_ita: string = "Parallelamente ai miei studi universitari in informatica, ho imparato da solo HTML, CSS e Javascript.\n" +
    "Con il passare del tempo ho realizzato un paio di siti web e web app utilizzando React e React-Native, sempre da autodidatta.\n" +
    "Dopo la laurea ho imparato a sviluppare siti web utilizzando Angular, Spring e MySql assieme."
  other_eng: string = "When i'm not coding I hang out with my friends and keep fit by cycling.";
  other_ita: string = "Quando non program" + "mo esco coi miei amici e mi tengo in forma andando in bicicletta";
  interest_eng: string = "Interests and likes";
  interest_ita: string = "Interessi e hobby";
  hobby_eng: string[] = ["Cycling", "Watching Anime", "Studying and learning ", "Reading", "Cats and Spritz"];
  hobby_ita: string[] = ["Ciclismo", "Guardare Anime", "Studiare e imparare cose nuove", "Leggere", "Gatti e Spritz"];

  constructor() { }

  ngOnInit(): void {
    this.flag = this.flag !== null ? this.flag : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.flag = changes.flag.currentValue;
  }

  scrollAbout(str: string) {
    scroll(str);
  }
}
