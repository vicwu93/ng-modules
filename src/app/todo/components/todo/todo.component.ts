import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { allCaps } from '../../../shared/validators/validators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  form!: FormGroup;
  parentString!: string;

  @ViewChild('emit') emitChild: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', allCaps()],
    });

    this.parentString = 'from parent';
  }

  onSubmit() {
    console.log(this.emitChild);
  }

  onEmit(event: any) {
    console.log(event);
  }

  get fname() {
    return this.form.get('fname');
  }

  get lname() {
    return this.form.get('lname');
  }
}
