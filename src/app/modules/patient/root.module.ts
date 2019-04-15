import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from './views/listview/listview.component';
import { CreateviewComponent } from './views/createview/createview.component';
import { EditviewComponent } from './views/editview/editview.component';
import { DetailviewComponent } from './views/detailview/detailview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: ListviewComponent },
  { path: 'createview', component: CreateviewComponent },
  { path: 'editview', component: EditviewComponent },
  { path: 'detailview/:id', component: DetailviewComponent },
];

@NgModule({
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes),ReactiveFormsModule],
  declarations: [
    ListviewComponent, 
    CreateviewComponent, 
    EditviewComponent, 
    DetailviewComponent,
  ]
})
export class RootModule { }
