import { Component, OnInit } from '@angular/core';
import { TodotaskService } from '../service/todotask.service';


@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  rmvTask:any;
  getTsk:any;
 // getrmvTsk:string='';
  constructor(public service:TodotaskService) { }

  ngOnInit(): void {
  }

  getRemovedTask() {
    this.getTsk = this.service.rmvTask;
    console.log(this.getTsk)
    //this.getTsk =  this.service.rmvTask;
    //console.log(this.getTsk);
  }
}
