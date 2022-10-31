import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { identity } from 'rxjs';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}

