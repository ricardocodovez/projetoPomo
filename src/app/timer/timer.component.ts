import { BoundElementPropertyAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
// timer
  title: string = 'Timer';
  minutos: number;
  segundos: number;
  Paused: boolean = true;
  vezes: number = 0;
  buttonLabel: string;
  relogio: any;
  confirmar: any;//mensagem da tela
  confirmar2: any;//mensagem da tela

  minutos2: number = 5;
  segundos2: number = 0;
  Paused2: boolean = true;
  vezes2: number = 0;
  buttonLabel2: string;
  relogio2: any;

  //tarefas
  tarefas = [];

  item: any = '';
  item2: any = '';

  lista: any = this.tarefas;
  ocultarEdit: boolean = true;

  constructor() {
    this.contar();
    setInterval(() => this.tick(), 10);
  }

  contar(): void {
    this.minutos = 25;
    this.segundos = 0;
    this.minutos2 = 5;
    this.segundos2 = 0;
    this.buttonLabel = 'Empezar';
    this.buttonLabel2 = 'Empezar';

  }



  ngOnInit(): void {
    this.minutos = 25;
    this.segundos = 0;
    this.segundos2 = 0;
    this.minutos2 = 5;
    this.buttonLabel = 'Empezar';
  }

   // Metodos
    redefinirPomo(): void {
      this.minutos = 25;
      this.segundos = 0;
      this.confirmar = "";


    }

    redefinirdescanso(): void {
      this.minutos2 = 5;
      this.segundos2 = 0;

    }

    aggTarefa():void {
      if (this.vezes % 4 === 0) {
        this.minutos = 25
        this.segundos = 0
      }

      this.tarefas.push(this.item);
      this.item = '';
    }

    descanso():void {
      if (this.vezes2 % 4 == 0) {
        this.minutos2 = 4
        this.segundos2 = 0
      }
      this.tarefas.push(this.item);
      this.item = '';
    }


    myValue;
    editTarefa(i): void {
      this.ocultarEdit = false;
      this.item2 = this.tarefas[i];
      this.myValue = i;
    }

    actTarefa(): void {
      this.ocultarEdit = true;
      let i = this.myValue;
      for ( let j = 0; j < this.tarefas.length; j++) {
        if (i == j) {
          this.tarefas[i] = this.item2;
          this.item2 = '';
          console.log(this.item2.value);
        }
      }
    }

    deletTarefa(i) {
      var resposta = confirm('Deseja eliminar tarefa?');
      if (resposta) {
        this.tarefas.splice( i, 1)
      }
    }



      private tick(): void {
        if(!this.Paused) {
          this.buttonLabel = 'Detener';

          if(--this.segundos < 0) {
            this.segundos = 59;
            if(--this.minutos < 0) {
              this.minutos = 0;
              this.segundos = 0;
             }

             if(this.minutos > 0 && this.segundos  < 60) {
              this.confirmar = 'Hora de trabalhar'

            }
            if(this.minutos === 0 && this.segundos  === 0) {
              this.confirmar = 'Hora de descansar ou reset para voltar'
            }
          }
        }
      }

      private tack(): void {
        if(!this.Paused2) {
          this.buttonLabel2 = 'Detener';


          if(--this.segundos2 < 0) {
            this.segundos2 = 59;
            if(--this.minutos2 < 0) {
              this.minutos2 = 0;
              this.segundos2 = 0;
            }
            if(this.minutos2 == 0 && this.segundos2 < 0) {
              this.confirmar2 =  "Reset para voltar ao trabalho";


          }
        }
      }
    }

      iniciarPomo(): void{
        this.Paused = !this.Paused;

        if (!this.Paused && this.relogio === undefined) {
          this.relogio = setInterval(() => this.tick(), 1000);
          if(this.segundos > 0) {
          }
        }
      }

      descansarPomo() {
        this.Paused2 = !this.Paused2;
        if (!this.Paused2 && this.relogio2 === undefined) {
          this.relogio2 = setInterval(() => this.tack(), 10);
          if(this.segundos2 > 0) {

        }
       }
      }

}

