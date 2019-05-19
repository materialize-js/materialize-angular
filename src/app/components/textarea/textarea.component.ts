import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import fieldValidations from '../../fixtures/field-validations';
import { FormFieldAbstract } from '../form/form-field.abstract';
import { getBooleanValue } from '../../utils/get-boolean-value.util';
import { TextAreaModel } from './textarea.model';

@Component({
  providers: [{
    provide: FormFieldAbstract,
    useExisting: forwardRef(() => TextAreaComponent)
  }],
  selector: 'materialize-textarea',
  styleUrls: ['./textarea.component.scss'],
  templateUrl: './textarea.component.html'
})
export class TextAreaComponent extends FormFieldAbstract implements OnInit {
  static readonly defaultProps: TextAreaModel = {
    className: '',
    disabled: false,
    errorMessage: '',
    floatLabel: '',
    hasCounter: false,
    id: '',
    label: '',
    maxLength: 500,
    minLength: 0,
    name: '',
    placeholder: '',
    required: false,
    rows: 1,
    value: ''
  };

  @ViewChild('formControlWrapper') formControlWrapperRef: ElementRef;
  @ViewChild('textArea') textAreaRef: ElementRef;

  @Output('onFocus') onFocusEmitter: EventEmitter<Event>;
  @Output('onChange') onChangeEmitter: EventEmitter<Event>;
  @Output('onBlur') onBlurEmitter: EventEmitter<Event>;

  @Input('className') classNameInput: string;
  @Input('disabled') disabledInput: boolean;
  @Input('floatLabel') floatLabelInput: string;
  @Input('hasCounter') hasCounterInput: boolean;
  @Input('id') idInput: string;
  @Input('label') labelInput: string;
  @Input('maxLength') maxLengthInput: number;
  @Input('minLength') minLengthInput: number;
  @Input('name') nameInput: string;
  @Input('placeholder') placeholderInput: string;
  @Input('required') requiredInput: boolean;
  @Input('rows') rowsInput: number;
  @Input('value') valueInput: string;

  public className: string;
  public disabled: boolean;
  public errorMessage: string;
  public floatLabel: string;
  public hasCounter: boolean;
  public id: string;
  public isFocused: boolean;
  public isTouched: boolean;
  public isValid: boolean;
  public label: string;
  public minLength: number;
  public maxLength: number;
  public name: string;
  public rows: number;
  public placeholder: string;
  public required: boolean;
  public value: string;

  constructor() {
    super();

    this.onBlurEmitter = new EventEmitter();
    this.onChangeEmitter = new EventEmitter();
    this.onFocusEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.initValues();
  }

  initValues(): void {
    const { defaultProps } = TextAreaComponent;

    this.className = this.classNameInput || defaultProps.className;
    this.disabled = getBooleanValue(this.disabledInput, defaultProps.disabled);
    this.floatLabel = this.floatLabelInput || defaultProps.floatLabel;
    this.hasCounter = getBooleanValue(this.hasCounterInput, defaultProps.hasCounter);
    this.id = this.idInput || defaultProps.id;
    this.label = this.labelInput || defaultProps.label;
    this.maxLength = this.maxLengthInput || defaultProps.maxLength;
    this.minLength = this.minLengthInput || defaultProps.minLength;
    this.name = this.nameInput || defaultProps.name;
    this.placeholder = this.placeholderInput || defaultProps.placeholder;
    this.required = getBooleanValue(this.requiredInput, defaultProps.required);
    this.rows = this.rowsInput || defaultProps.rows;
    this.value = this.valueInput || defaultProps.value;

    this.isFocused = false;
    this.isTouched = false;
    this.isValid = this.validate(this.value, this.required);
  }

  onBlur(event: any): void {
    if (!this.floatLabel || event.relatedTarget !== this.formControlWrapperRef.nativeElement) {
      this.isTouched = true;
      this.isFocused = false;

      this.isValid = this.validate(this.value, this.required);

      this.onBlurEmitter.emit(event);
    }
  }

  onFocus(event: Event): void {
    if (!this.disabled) {
      this.isFocused = true;
      this.onFocusEmitter.emit(event);
      this.textAreaRef.nativeElement.focus();
    }
  }

  onChange(event: any): void {
    const { value } = event.target;

    this.value = value;
    this.isValid = this.validate(this.value, this.required);
    this.onChangeEmitter.emit(event);
  }

  validate(value: string, required: boolean): boolean {
    this.errorMessage = '';

    if (required && (this.minLength > value.length || this.maxLength < value.length)) {
      return false;
    }

    if (required && !value.length) {
      const fieldValidation = fieldValidations['required'];

      this.errorMessage = fieldValidation.errorMessage;

      return false;
    }

    return true;
  }

  updateAndValidity() {
    this.isTouched = true;
    this.isValid = this.validate(this.value, this.required);
  }
}