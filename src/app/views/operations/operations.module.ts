import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations.routing';
import { OperationsComponent } from './operations.component';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule
  ],
  declarations: [OperationsComponent]
})
export class OperationsModule { }
