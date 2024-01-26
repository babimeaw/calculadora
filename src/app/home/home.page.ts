import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

  
export class HomePage {
  visor : string = '0' ;
  operacao! : number;
  valor1! : number;
  valor2! : number;
  
  constructor(){
    
  }

  inverso(){
    this.valor1 = +this.visor;
    this.visor = "" + (this.valor1 * -1)
  }

  ponto(){
    this.valor1 = +this.visor;
    this.visor = "" + (this.valor1 + ".")
  }

  porcem(){
    this.valor1 = +this.visor;
    this.visor = "" + (this.valor1 /100);
  }

  
  addNum(valor : string){
    if((this.visor.length == 1) && (this.visor == '0')){
      this.visor = valor;
    }else{
      this.visor += valor;
    }
  }
  addOp(valor : number){
    this.operacao = valor;
    this.valor1 = +this.visor;
    this.valor2 = Number(this.visor);
    this.limpar();
  }


  
  calcular(){
    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0 : {
        this.visor = "" + ( this.valor1 + this.valor2);
        break;
      }
      case 1 : {
        this.visor = "" + ( this.valor1 - this.valor2);
        break;
      }
      case 2 : {
        this.visor = "" + ( this.valor1 * this.valor2);
        break;
      }
      case 3 : {
      this.visor = "" + ( this.valor1 / this.valor2);
      break;  
      }
    }
  }

  limpar(){
    this.visor = "0";
  }

}
