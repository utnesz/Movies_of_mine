import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { MoivesEditorComponent } from './common/moives-editor/moives-editor.component';
import { MoivesListComponent } from './common/moives-list/moives-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: MoivesListComponent,
  },
  {
    path: 'editor/:id',
    component: MoivesEditorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
