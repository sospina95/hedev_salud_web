import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from './views/listview/listview.component';

const routes: Routes = [
  { path: '', component: ListviewComponent }
];



@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ListviewComponent]
})
export class RootModule { }
