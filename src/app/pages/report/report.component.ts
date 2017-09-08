import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  timeNow: any;

  chartData =  {
    chartType: 'ComboChart',
    dataTable: [
      ['Country', 'Performance', { role: 'style' }],
      ['Disponibilide (%)', 86, '#2DC636'],
      ['Desempenho (%)', 92, '#E77B7A'],
      ['Qualidade (%)', 98, '#92C536'],
      ['OEE (%)', 83, '#F766AA'],
      ['Meta (%)', 80, '#C8AE88'],
      ['Utilização (%)', 100, '#6192E1'],
      ['Cap. de Utiliz. (%)', 82, '#5C9798']
    ],
    options: {
      height: 400,
      vAxis: {title: '(%)'},
      hAxis: {title: ''},
      seriesType: 'bars',
      legend: {position: 'none'},
    }
  };

  chartParadasData =  {
    chartType: 'ComboChart',
    dataTable: [
      ['Country', 'Performance'],
      ['A-01', 3],
      ['A-20', 4]
    ],
    options: {
      height: 400,
      vAxis: {title: 'Paradas (%)'},
      hAxis: {title: ''},
      seriesType: 'bars',
      colors: ['lightblue'],
      bar: {groupWidth: "30%"},
      legend: {position: 'none'},
    }
  };

  constructor() { }

  ngOnInit() {
    $('.tooltipped').tooltip({delay: 50});
    this.getTimeNow();
  }

  getTimeNow() {
    let currentdate = new Date(); 
    let datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " - "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    this.timeNow =  datetime;
  }

}
