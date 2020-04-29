import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app1'

  public jogoEmAndamento: boolean = true
  public tipoDeEncerramento: string
  
  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoDeEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoDeEncerramento = undefined
  }
}
