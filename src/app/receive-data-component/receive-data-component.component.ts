import { Component, OnInit } from '@angular/core';
import { BehaviourServiceService } from '../behaviour-service.service';

@Component({
  selector: 'app-receive-data-component',
  templateUrl: './receive-data-component.component.html',
  styleUrls: ['./receive-data-component.component.css']
})
export class ReceiveDataComponentComponent implements OnInit {

  recievedData: any;

  constructor(public behaviourService: BehaviourServiceService) { }

  ngOnInit() {
    this.behaviourService.behaveData.subscribe((data) => {
      this.recievedData = data
    })
  }

}
