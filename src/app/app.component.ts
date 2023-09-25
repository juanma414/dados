import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = '../assets/img/dice.png'
  dadoDerecha = '../assets/img/dice1.png'
  nro1: number=1;
  nro2: number=2;

  tirarDados():void{
    this.nro1 = Math.round(Math.random()*5)+1;
    this.nro2 = Math.round(Math.random()*5)+1;
    this.dadoIzquierda = '../assets/img/dice'+this.nro1+'.png'
    this.dadoDerecha = '../assets/img/dice'+this.nro2+'.png'
  }
}
