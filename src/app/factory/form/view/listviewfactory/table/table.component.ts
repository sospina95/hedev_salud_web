import { Component, OnInit, Input } from '@angular/core';
import { FactoryService } from '../../../service/factory.service';

@Component({
  selector: 'app-table-factory',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() factory;
  public field;
  public columns = [];
  public module;
  public characters;
  public box_title;
  public to_link;
  constructor(private atService: FactoryService) {
  }

  ngOnInit() {
    this.atService.getIndex(this.factory)
    .subscribe(res => {
      this.characters = res;
      try {
        this.module = this.factory[0].module;
        this.columns = this.factory[0].field;
        this.box_title = this.factory[0].box_title;
        this.to_link = this.factory[0].to_link
      } catch (error) {
        this.columns = [];
      }
    });
  }
}
