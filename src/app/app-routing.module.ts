import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraPage } from './calculadora/calculadora.page';
import { ResultadoPage } from './resultado/resultado.page';

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraPage },
  { path: 'resultado/:asignatura/:codigo/:promedio', component: ResultadoPage },
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
