import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-temp-form',
  templateUrl: './nested-temp-form.component.html',
  styleUrls: ['./nested-temp-form.component.css']
})
export class NestedTempFormComponent {

  model = {
    uid: "",
    name: "",
    age: "",
    address: {
      houseNo: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: ""
    },
  }

  onSubmit(f: any): void {
    console.log(f.value)
    // f.resetForm()
  }
}
