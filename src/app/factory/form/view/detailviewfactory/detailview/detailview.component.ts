import { Component, OnInit, Input } from '@angular/core';
import { FactoryService } from '../../../service/factory.service';
import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-detailview-factory',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewFactoryComponent implements OnInit {
  @Input() factory;
  public field;
  public columns = [];
  public module;
  public characters = [];
  public box_title;
  constructor(private atService: FactoryService) { }

  ngOnInit() {
    this.atService.getDetail(this.factory)
      .subscribe(res => {
        this.characters.push(res);
        try {
          this.module = this.factory[0].module;
          this.columns = this.factory[0].field;
          this.box_title = this.factory[0].box_title;
        } catch (error) {
          this.columns = [];
        }
      });
    this.DataBarra();
    this.Datapie();
    this.DataLinea();
  }
  DataBarra() {
    let chart = new CanvasJS.Chart("chartContainerBarra", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });

    chart.render();
  }
  Datapie() {
    let chart = new CanvasJS.Chart("chartContainerPie", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping" },
          { y: 250, name: "Others" }
        ]
      }]
    });

    chart.render();
  }
  DataLinea() {
    let dataPoints = [];
    let dpsLength = 0;
    let chart = new CanvasJS.Chart("chartContainerLine",{
      exportEnabled: true,
      title:{
        text:"Live Chart with Data-Points from External JSON"
      },
      data: [{
        type: "spline",
        dataPoints : dataPoints,
      }]
    });
    
    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function(data) {  
      $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
      });
      dpsLength = dataPoints.length;
      chart.render();
      updateChart();
    });
    function updateChart() {	
    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json&callback=?", function(data) {
      $.each(data, function(key, value) {
        dataPoints.push({
        x: parseInt(value[0]),
        y: parseInt(value[1])
        });
        dpsLength++;
      });
      
      if (dataPoints.length >  20 ) {
            dataPoints.shift();				
          }
      chart.render();
      setTimeout(function(){updateChart()}, 1000);
    });
      }
    }
}
