import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { config } from '../../config';
import { getBooleanValue } from '../../utils/get-boolean-value.util';
import { SelectModel } from './select.model';
import { SelectOptionComponent } from '../select-option/select-option.component';

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent)
  }],
  selector: `${ config.components.prefix }-select }`,
  styleUrls: ['./select.component.scss'],
  templateUrl: './select.component.html'
})
export class SelectComponent implements ControlValueAccessor, OnInit, AfterContentInit {
  static readonly defaultProps: SelectModel = {
    className: '',
    disabled: false,
    floatLabel: '',
    id: '',
    isNativeControl: false,
    name: '',
    required: false,
    value: ''
  };

  @ViewChild('backdrop') backdropRef: ElementRef;
  @ViewChild('labelContainer') labelContainerRef: ElementRef;

  @ContentChildren(SelectOptionComponent) optionsQueryList: QueryList<SelectOptionComponent>;

  @Output('onChange') onChangeEmitter: EventEmitter<string>;

  @Input('className') classNameInput: string;
  @Input('disabled') disabledInput: boolean;
  @Input('floatLabel') floatLabelInput: string;
  @Input('id') idInput: string;
  @Input('isNativeControl') isNativeControlInput: boolean;
  @Input('name') nameInput: string;
  @Input('required') requiredInput: boolean;
  @Input('value') valueInput: string;

  public className: string;
  public disabled: boolean;
  public floatLabel: string;
  public id: string;
  public isFocused: boolean;
  public isNativeControl: boolean;
  public isOpen: boolean;
  public name: string;
  public required: boolean;
  public valueLabel: string;
  public value: string;

  constructor(private renderer: Renderer2) {
    this.onChangeEmitter = new EventEmitter();

    this.addBackdropListener = this.addBackdropListener.bind(this);
    this.onChangeOption = this.onChangeOption.bind(this);
    this.registerOptions = this.registerOptions.bind(this);
  }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    const { defaultProps } = SelectComponent;

    this.className = this.classNameInput || defaultProps.className;
    this.disabled = getBooleanValue(this.disabledInput, defaultProps.disabled);
    this.floatLabel = this.floatLabelInput || defaultProps.floatLabel;
    this.id = this.idInput || defaultProps.id;
    this.isNativeControl = getBooleanValue(this.isNativeControlInput, defaultProps.isNativeControl);
    this.name = this.nameInput || defaultProps.name;
    this.required = getBooleanValue(this.requiredInput, defaultProps.required);
    this.value = this.valueInput || defaultProps.value;

    this.isFocused = false;
    this.isOpen = false;
  }

  ngAfterContentInit() {
    setTimeout(this.registerOptions, 0);

    this.optionsQueryList.changes.subscribe(changes => {
      setTimeout(this.registerOptions, 0);
    });
  }

  registerOptions() {
    this.optionsQueryList.forEach(option => {
      option.isActive = (option.value === this.value);

      option.onClickEmitter.subscribe(this.onChangeOption);
    });

    this.updateControl(this.value);
  }

  updateControl(value: string) {
    this.value = value;
    this.isOpen = false;

    this.activeSelectedOption(this.value);
  }

  onChangeOption(value: string) {
    this.updateControl(value);

    this.onChangeEmitter.emit(this.value);
    this.onChange(this.value);
  }

  activeSelectedOption(value: string) {
    this.optionsQueryList.forEach(option => {
      if (option.value === value) {
        option.isActive = true;

        this.cloneOption(option);
      } else {
        option.isActive = false;
      }
    });
  }

  cloneOption(selectedOption: SelectOptionComponent) {
    if (!this.labelContainerRef) {
      return;
    }

    const { nativeElement: labelContainer } = this.labelContainerRef;
    const { optionTemplateRef } = selectedOption;

    if (labelContainer.firstChild) {
      this.renderer.removeChild(labelContainer, labelContainer.firstChild);
    }

    if (optionTemplateRef) {
      const { firstChild } = optionTemplateRef.nativeElement;
      const cloned = firstChild.cloneNode(true);

      this.renderer.appendChild(labelContainer, cloned);
    }
  }

  onChangeNativeOption(event: any) {
    const { selectedOptions } = event.target;
    const { value } = selectedOptions[0];

    this.value = value;

    this.onChangeEmitter.emit(this.value);
    this.onChange(this.value);
  }

  onBlur(): void {
    this.isFocused = false;
  }

  onFocus(): void {
    if (!this.disabled) {
      this.isFocused = true;

      this.onTouched();
    }
  }

  onClick() {
    if (!this.disabled) {
      this.isFocused = true;
      this.isOpen = true;

      if (!this.isNativeControl) {
        setTimeout(this.addBackdropListener, 0);
      }
    }
  }

  addBackdropListener() {
    this.backdropRef.nativeElement.addEventListener('click', () => {
      this.isOpen = false;
    });
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;

    setTimeout(() => {
      this.updateControl(this.value);
    }, 0);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange(value: string): void {}

  onTouched(): void {}
}
