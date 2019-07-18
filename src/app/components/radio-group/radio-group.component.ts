import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { config } from '../../config';
import { getBooleanValue } from '../../utils/get-boolean-value.util';
import { RadioComponent } from '../radio/radio.component';
import { RadioGroupModel } from './radio-group.model';

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent)
  }],
  selector: `${ config.components.prefix }-radio-group }`,
  styleUrls: ['./radio-group.component.scss'],
  templateUrl: './radio-group.component.html'
})
export class RadioGroupComponent implements OnInit, AfterContentInit, ControlValueAccessor {
  static readonly defaultProps: RadioGroupModel = {
    canUncheck: false,
    className: '',
    disabled: false,
    id: '',
    indicatorAtEnd: false,
    name: '',
    required: false,
    value: ''
  };

  @ContentChildren(RadioComponent) radiosQueryList: QueryList<RadioComponent>;

  @Output('onChange') onChangeEmitter: EventEmitter<string>;

  @Input('canUncheck') canUncheckInput: boolean;
  @Input('className') classNameInput: string;
  @Input('disabled') disabledInput: boolean;
  @Input('id') idInput: string;
  @Input('indicatorAtEnd') indicatorAtEndInput: boolean;
  @Input('name') nameInput: string;
  @Input('required') requiredInput: boolean;
  @Input('value') valueInput: string;

  public canUncheck: boolean;
  public className: string;
  public disabled: boolean;
  public id: string;
  public indicatorAtEnd: boolean;
  public isFocused: boolean;
  public name: string;
  public required: boolean;
  public value: string;

  constructor() {
    this.registerRadios = this.registerRadios.bind(this);
    this.toggleRadios = this.toggleRadios.bind(this);

    this.onChangeEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.initValues();
  }

  ngAfterContentInit() {
    this.initRadios();

    this.radiosQueryList.changes.subscribe(changes => {
      this.initRadios();
    });
  }

  initValues() {
    const { defaultProps } = RadioGroupComponent;

    this.className = this.classNameInput || defaultProps.className;
    this.disabled = this.disabledInput || defaultProps.disabled;
    this.id = this.idInput || defaultProps.id;
    this.indicatorAtEnd = getBooleanValue(this.indicatorAtEndInput, defaultProps.indicatorAtEnd);
    this.canUncheck = getBooleanValue(this.canUncheckInput, defaultProps.canUncheck);
    this.name = this.nameInput || defaultProps.name;
    this.required = getBooleanValue(this.requiredInput, defaultProps.required);
    this.value = this.valueInput || defaultProps.value;

    this.isFocused = false;
  }

  initRadios() {
    this.disableAllRadios(this.disabled);

    setTimeout(this.registerRadios, 0);
  }

  registerRadios() {
    this.radiosQueryList.forEach(radio => {
      radio.isActive = (radio.value === this.value);

      radio.onClickEmitter.subscribe(this.toggleRadios);
    });
  }

  toggleRadios(value: string) {
    this.setValueAllRadios(value);

    const currentRadio = this.radiosQueryList.find(radio => radio.value === value);

    this.value = currentRadio && currentRadio.isActive
      ? currentRadio.value
      : '';

    this.onTouched();
    this.onChange(this.value);

    this.onChangeEmitter.emit(this.value);
  }

  setValueAllRadios(value: string) {
    this.radiosQueryList.forEach(radio => {
      if (radio.value !== value) {
        radio.isActive = false;
      }

      if (radio.value === value && !this.canUncheck) {
        radio.isActive = true;
      }
    });
  }

  disableAllRadios(disabled: boolean) {
    this.radiosQueryList.forEach(radio => {
      radio.disabled = disabled;
    });
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    setTimeout(() => {
      this.disableAllRadios(this.disabled);
    }, 0);
  }

  writeValue(value: string): void {
    this.value = value;

    setTimeout(() => {
      this.setValueAllRadios(this.value);
    }, 0);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange(value: string): void {
  }

  onTouched(): void {}
}
