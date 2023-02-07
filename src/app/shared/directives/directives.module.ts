import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleDirective } from './style.directive';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    StyleDirective,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[StyleDirective,SearchPipe]
})
export class DirectivesModule { }
