import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  @Input() form!: FormGroup;
  @Input() isVisible = false;
  @Output() submit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  serviceTypes = [
    { label: 'Seleccione una categoría', value: '' },
    { label: 'Transferencia', value: 'transfer' },
    { label: 'Pago de Servicios', value: 'services' },
    { label: 'Retiro', value: 'withdrawal' }
  ];

  prestationServices = [
    { label: 'Seleccione primero una...', value: '' },
    { label: 'Servicio 1', value: 'service1' },
    { label: 'Servicio 2', value: 'service2' }
  ];

  fees = [
    { label: 'Seleccione...', value: '' },
    { label: 'Sin comisión', value: '0' },
    { label: 'Comisión estándar', value: '2.5' }
  ];

  cards = [
    { label: 'Seleccione...', value: '' },
    { label: 'Tarjeta Débito ****1234', value: 'card1' },
    { label: 'Tarjeta Crédito ****5678', value: 'card2' }
  ];

  currencies = [
    { label: 'Seleccione...', value: '' },
    { label: 'USD', value: 'USD' },
    { label: 'CAD', value: 'CAD' },
    { label: 'MXN', value: 'MXN' }
  ];

  onSubmit(): void {
    this.submit.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

  generateCode(): void {
    const code = 'COD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    console.log('Generated code:', code);
  }
}
