import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibSeachComponent } from './lib-seach/lib-seach.component';

const routes: Routes = [
  {
    path: '', component: LibSeachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorReativoRoutingModule { }
