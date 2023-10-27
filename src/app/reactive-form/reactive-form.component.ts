import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  isSubmited: boolean = false;
  userForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(75)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  });

  onSubmit(): void {
    this.isSubmited = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
  }

}
