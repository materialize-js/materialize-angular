import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'materialize-modal-handler',
  templateUrl: './modal-handler.component.html'
})
export class ModalHandlerComponent {
  @Output('onClick') onClickEmitter: EventEmitter<void>;

  constructor(public elementRef: ElementRef) {
    this.onClickEmitter = new EventEmitter();
  }

  @HostListener('click')
  onClick() {
    this.onClickEmitter.emit();
  }
}
