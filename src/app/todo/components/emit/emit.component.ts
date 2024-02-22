import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
})
export class EmitComponent implements OnInit {
  @Output() toParent: EventEmitter<string> = new EventEmitter();
  @Input() fromParent: string = '';

  constructor() {}

  ngOnInit() {
    console.log('passed from parent', this.fromParent);
  }

  onClick() {
    this.toParent.emit('hello from child');
  }
}
