import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { BacharelComponent } from './bacharel/bacharel.component';
import { CursosService } from './cursos.service';


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
  ],
  providers: [CursosService]
})
export class CursosModule { }