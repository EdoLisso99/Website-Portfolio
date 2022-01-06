import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {scroll} from "../../../assets/utilities";
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges {
  @Input() flag !:boolean;
  share_eng: string = "We'll never share your email with anyone else.";
  share_ita: string = "Non condivideremo mai la tua email con nessun altro.";

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [Validators.required, Validators.minLength(20)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email])
  });

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

  fromEngToIta(str: string) : string{
    if(str === "name"){
      return "il nome";
    }
    else if(str === "message"){
      return "il messaggio";
    }
    else{
      return "la email";
    }
  }

  sendEmail(e: Event) {
    e.preventDefault();
    console.log(this.formGroup);
    if(this.formGroup.valid){
      alert(this.flag ? "Il messaggio è stato inviato con successo" : "Your message has been sent successfully");
    }
    else {
      let arr: string[] = [];
      for (let controlsKey in this.formGroup.controls) {
        if(!this.formGroup.controls[controlsKey].valid){
          arr.push(controlsKey.toString());
        }
      }
      if(this.flag){
        let str = "Errore! ";
        arr.forEach(err => str += this.fromEngToIta(err) + " ");
        if(arr.length > 1){
          alert(str + "sono invalidi!");
        }
        else {
          alert(str + "è invalido!");
        }
      }
      else {
        let str = "Error! ";
        arr.forEach(err => str += err + " ");
        if(arr.length > 1){
          alert(str + "are invalid!");
        }
        else {
          alert(str + "is invalid!");
        }
      }
    }
  }
}
