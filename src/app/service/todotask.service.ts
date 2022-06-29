import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodotaskService {
  task:string[]= [];

  rmvTask:string[]=[];

  constructor() { }

  // getData(data:string) {
  //   this.task.push(data)
  // }

  // showData() {
  //   console.log(this.task)
  // }

  // getTasks(data:any) {
  //   this.task.push(data)
  // }
}

