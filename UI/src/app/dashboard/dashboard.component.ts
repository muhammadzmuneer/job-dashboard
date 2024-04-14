import { Component, OnInit } from '@angular/core';
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from 'chart.js'
import { JobService } from '../services/job.service';

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend
);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public dashboardData: any;
  constructor(private _jobService: JobService){}

  ngOnInit(): void {
    this._jobService.getDashboardData().subscribe({
      next: (res) =>{
        this.dashboardData = res;
        console.log(this.dashboardData);
      }
    })
    this.createBarChart();
  }

  public chart : any;
  // createChart() {
  //   const data = {
  //     labels: labels,
  //     datasets: [{
  //       label: 'My First Dataset',
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //         'rgba(255, 205, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(201, 203, 207, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgb(255, 99, 132)',
  //         'rgb(255, 159, 64)',
  //         'rgb(255, 205, 86)',
  //         'rgb(75, 192, 192)',
  //         'rgb(54, 162, 235)',
  //         'rgb(153, 102, 255)',
  //         'rgb(201, 203, 207)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   };
  // }

  createBarChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Jobs','Retries','Recurring Jobs', 'Servers' ], 
	       datasets: [
          {
            label: 'count',
            data: ['3','2', '6', '7'],
            backgroundColor: ['#316CF4','#F6C343','#6E757C','black'],
            barThickness: 40
          }
   
        ]
      },
      options: {
        aspectRatio:3.5,
        plugins:{
          legend:{
            display:false
          }
        }
      }
      
    });
  }
}
