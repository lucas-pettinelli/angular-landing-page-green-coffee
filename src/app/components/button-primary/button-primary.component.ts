import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.css'
})
export class ButtonPrimaryComponent {
  @Input("button-text") buttonText: string = "Quero café!"
  @Output("submit") onSubmit = new EventEmitter()
  @Input() disabled: boolean = false
  @Input() loading: boolean = false

  submit() {
    this.onSubmit.emit()
  }
}
