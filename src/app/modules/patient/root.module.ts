import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from './views/listview/listview.component';
import { CreateviewComponent } from './views/createview/createview.component';
import { EditviewComponent } from './views/editview/editview.component';
import { DetailviewComponent } from './views/detailview/detailview.component';
import { TableComponent } from '../../factory/form/view/listviewfactory/table/table.component';
import { DetailviewFactoryComponent } from '../../factory/form/view/detailviewfactory/detailview/detailview.component';
import { ButtonsComponent } from '../../factory/buttons/buttons.component';
import { CreateviewFactoryComponent } from '../../factory/form/view/createviewfactory/createview/createview.component';
import { DateComponent } from '../../factory/date/date.component';
import { EmailComponent } from '../../factory/email/email.component';
import { InputComponent } from '../../factory/input/input.component';
import { SelectComponent } from '../../factory/select/select.component';
import { PhoneComponent } from '../../factory/phone/phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListviewComponent },
  { path: 'createview', component: CreateviewComponent },
  { path: 'editview', component: EditviewComponent },
  { path: 'detailview/:id', component: DetailviewComponent },
  { path: '', component: TableComponent },
  { path: '', component: DetailviewFactoryComponent },
  { path: '', component: CreateviewFactoryComponent },
  { path: '', component: ButtonsComponent },
  { path: '', component: DateComponent },
  { path: '', component: EmailComponent },
  { path: '', component: InputComponent },
  { path: '', component: SelectComponent },
  { path: '', component: PhoneComponent },
  
];

@NgModule({
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes),ReactiveFormsModule],
  declarations: [
    ListviewComponent, 
    CreateviewComponent, 
    EditviewComponent, 
    DetailviewComponent, 
    TableComponent, 
    DetailviewFactoryComponent, 
    ButtonsComponent, 
    CreateviewFactoryComponent,
    InputComponent,
    SelectComponent,
    DateComponent,
    EmailComponent,
    PhoneComponent
  ]
})
export class RootModule { }
