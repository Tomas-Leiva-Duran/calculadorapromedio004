import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalculadoraPage implements OnInit {

  asignatura: string = '';
  codigo: string = '' ;
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  porcentaje1: number = 0;
  porcentaje2: number = 0;
  porcentaje3: number = 0;

  constructor(public navCtrl: NavController) {}

  calcularPromedio() {
    if (this.validarDatos()) {
      const promedio = (this.nota1 * this.porcentaje1 + this.nota2 * this.porcentaje2 + this.nota3 * this.porcentaje3) / 100;
      this.navCtrl.navigateForward(`/resultado/${this.asignatura}/${this.codigo}/${promedio}`);
    } else {
      console.log("Error: Datos no válidos");
    }
  }

  private validarDatos(): boolean {
    const notasValidas = this.nota1 >= 0 && this.nota1 <= 10 && this.nota2 >= 0 && this.nota2 <= 10 && this.nota3 >= 0 && this.nota3 <= 10;
    const porcentajesValidos = this.porcentaje1 >= 0 && this.porcentaje1 <= 100 && this.porcentaje2 >= 0 && this.porcentaje2 <= 100 && this.porcentaje3 >= 0 && this.porcentaje3 <= 100;
    const sumaPorcentajes = this.porcentaje1 + this.porcentaje2 + this.porcentaje3 === 100;

    return notasValidas && porcentajesValidos && sumaPorcentajes;
  }


  ngOnInit() {
  }

}
