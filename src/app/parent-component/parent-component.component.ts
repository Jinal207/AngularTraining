import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})

export class ParentComponentComponent {

  parentMsg = "This is the message from parent to child";
  count: number = 0;

  counthandler(count: number) {
    this.count = count;
  }

}
