import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import { TelaComponent } from './tela/tela.component';
import { CadEditTelaComponent } from './cad-edit-tela/cad-edit-tela.component';



const routes: Routes = [
  {path: "", redirectTo: "/tela", pathMatch: "full"},
  {path: "tela", component: TelaComponent},
  {path: "cad-edit-tela/:tipo_acesso", component: CadEditTelaComponent},
  {path: "cad-edit-tela/:tipo_acesso/:id", component: CadEditTelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }