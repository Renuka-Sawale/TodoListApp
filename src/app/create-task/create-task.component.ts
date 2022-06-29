import { Component, OnInit } from '@angular/core';
import { TodotaskService } from '../service/todotask.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})

export class CreateTaskComponent {
  //public name ="Angular";
  tsk:string="";

  constructor(private  service:TodotaskService) { }

  ngOnInit(): void {
  }

  task(event:any) {
    this.tsk=event.target.value;
    this.service.task.push(event.target.value)
    console.log(this.service.task)
    console.log(this.tsk)
  ;}

}
