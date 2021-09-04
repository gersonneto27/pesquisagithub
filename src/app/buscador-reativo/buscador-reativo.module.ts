import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorReativoRoutingModule } from './buscador-reativo-routing.module';
import { LibSeachComponent } from './lib-seach/lib-seach.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibSeachComponent
  ],
  imports: [
    CommonModule,
    BuscadorReativoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BuscadorReativoModule { }
