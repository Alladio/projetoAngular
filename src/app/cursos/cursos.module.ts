import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { BacharelComponent } from './bacharel/bacharel.component';



@NgModule({
  declarations: [
    CursosComponent,
    BacharelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }