import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilsService } from '../../../service/utils.service';
import { FactoryService } from '../../../service/factory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createview-factory',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.css']
})
export class CreateviewFactoryComponent implements OnInit {
  @Input() factory;
  public field;
  public columns = [];
  public box_title;
  public module;
  public bloqueo_btn = false;
  public form: FormGroup;
  constructor(private utilsService: UtilsService,
              private factoryService: FactoryService,
              private router: Router) { }

  ngOnInit() {
    console.log("Factory", this.factory);
    this.module = this.factory[0].module;
    this.columns = this.factory[0].field;
    this.box_title = this.factory[0].box_title;
    this.form = this.utilsService.toFormGroup(this.columns);
    console.log(this.form);
    
  }

  add(){
    console.log("keep",this.form);
    if (this.form.valid){
      this.factory[0].formValue = this.form.value;
      console.log("this.factory",this.factory);
      
      this.factoryService.saveModule(this.factory).subscribe(rsFactory=>{
          console.log("rsFactory",rsFactory);
          this.router.navigate(['/patient'])
      });
    }
  }
  

}
