import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  public frase: Array<Frase> = FRASES;
  public titulo: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtbr == this.resposta){
      this.rodada++
      if (this.rodada >= this.frase.length) {
        this.encerrarJogo.emit('vitoria')
      }
      this.atualizaRodada()
      this.progresso += (100/this.frase.length)
      this.resposta = ''
    } else {
      this.tentativas--
      if (this.tentativas == -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frase[this.rodada]
  }

}
