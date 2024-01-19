import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResultadoPage {

  asignatura: string = '';
  codigo: string = '';
  promedio: number = 0;
  notaExamen: number = 0;
  porcentajeExamen: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.asignatura = params['asignatura'];
      this.codigo = params['codigo'];
      this.promedio = params['promedio'];
    });
  }

  calcularNotaExamen() {
    if (this.porcentajeExamen) {
      const porcentajeExamenDecimal = this.porcentajeExamen / 100;
      const porcentajePromedio = 1 - porcentajeExamenDecimal;

      // Calcula la nota necesaria en el examen
      this.notaExamen = (1 - this.promedio * porcentajePromedio) / porcentajeExamenDecimal;
      this.notaExamen = Math.max(0, Math.min(7, this.notaExamen)); // Asegura que la nota esté entre 0 y 7
    }
  }

}
