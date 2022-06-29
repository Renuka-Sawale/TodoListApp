import { Component, Input, OnInit } from '@angular/core';
//import { EventEmitter } from '@angular/core';
import { TodotaskService } from '../service/todotask.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.scss']
})
export class DisplayTaskComponent implements OnInit {
 // @Input() public parentData:any; 

  constructor(public service:TodotaskService) { }
 
  ngOnInit(): void {
    console.log(this.service.task)
  }
  
  removeTask(i: number) {
    this.service.task.splice(i,0);
    // console.log(this.service.task);
    let x = this.service.task[i];
    this.service.rmvTask.push(x);
    console.log(this.service.rmvTask);
  }
}
