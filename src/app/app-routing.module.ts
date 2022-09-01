import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPokemonComponent } from './layouts/lista-pokemon/lista-pokemon.component';

const routes: Routes = [
  {path: "", component: ListaPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
