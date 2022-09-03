import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInteractionComponent } from './list-intercation/list-interaction.component';

const routes: Routes = [
  {path:'',component:ListInteractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }