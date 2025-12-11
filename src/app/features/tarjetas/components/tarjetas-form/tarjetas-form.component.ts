import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-tarjetas-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './tarjetas-form.component.html',
  styleUrl: './tarjetas-form.component.scss'
})
export class TarjetasFormComponent implements OnInit {
  @Input() actionType: string = '';
  @Output() onSubmit = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  nuevaTarjetaForm = {
    nombreTitular: '',
    apellidoTitular: '',
    tipoTarjeta: 'debito',
    moneda: 'CAD',
    limiteCredito: 10000,
    correoElectronico: '',
    telefonoContacto: ''
  };

  recargarSaldoForm = {
    tarjetaSeleccionada: '',
    montoRecarga: '',
    metodoPago: 'transferencia',
    referencia: '',
    descripcion: ''
  };

  tarjetasDisponibles = [
    { id: 'TC-CAD-1', label: 'TC-CAD-1 (4532 •••• 7891)' },
    { id: 'TC-CAD-2', label: 'TC-CAD-2 (5168 •••• 3456)' },
    { id: 'TC-USD-1', label: 'TC-USD-1 (3782 •••• 2365)' },
    { id: 'TC-USD-2', label: 'TC-USD-2 (6011 •••• 9876)' }
  ];

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.actionType === 'nueva-tarjeta') {
      this.submitNuevaTarjeta();
    } else if (this.actionType === 'recargar-saldo') {
      this.submitRecargarSaldo();
    }
  }

  submitNuevaTarjeta(): void {
    console.log('Nueva Tarjeta:', this.nuevaTarjetaForm);
    this.onSubmit.emit();
  }

  submitRecargarSaldo(): void {
    console.log('Recargar Saldo:', this.recargarSaldoForm);
    this.onSubmit.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }

  getFormTitle(): string {
    if (this.actionType === 'nueva-tarjeta') {
      return 'Añadir Nueva Tarjeta';
    } else if (this.actionType === 'recargar-saldo') {
      return 'Recargar Saldo';
    }
    return '';
  }

  getFormIcon(): string {
    if (this.actionType === 'nueva-tarjeta') {
      return 'pi-plus-circle';
    } else if (this.actionType === 'recargar-saldo') {
      return 'pi-refresh';
    }
    return '';
  }
}
