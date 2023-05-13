import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigListComponent } from './ConfigList';
import { ConfigEditComponent } from './ConfigEdit';

const routes: Routes = [
  {path: 'configuration-fields', component: ConfigListComponent},
  {path: 'configuration-fields/edit', component: ConfigEditComponent},
  {path: 'configuration-fields/edit/:configId', component: ConfigEditComponent},
  {path: '**', redirectTo: 'configuration-fields', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
