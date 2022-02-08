import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = '531--esercizio-ngfor-save-list-and-save-button-Piazzolla21';
  lista : string[]= ["ciao","bho"]
  testo : string = ""
  bho (){
    this.lista.push(this.testo)
    
  }
}
