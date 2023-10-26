import { Component } from '@angular/core';
import { BehaviourServiceService } from '../behaviour-service.service';

@Component({
  selector: 'app-send-data-component',
  templateUrl: './send-data-component.component.html',
  styleUrls: ['./send-data-component.component.css']
})
export class SendDataComponentComponent {

  constructor(public behaviourService: BehaviourServiceService) { }

  onClickData() {
    this.behaviourService.behaveData.next("This is the message from sendData component")
  }

}
