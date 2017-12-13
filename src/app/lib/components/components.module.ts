import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './nav/title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, FooterComponent, TitleComponent],
  exports: [NavComponent, FooterComponent]
})
export class ComponentsModule { }
