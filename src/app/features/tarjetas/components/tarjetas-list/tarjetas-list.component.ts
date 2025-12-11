import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface Tarjeta {
  id: string;
  numero: string;
  numeroMascarado: string;
  titular: string;
  tipo: string;
  moneda: string;
  saldoActual: number;
  saldoLimite: number;
  porcentajeUso: number;
  estado: string;
  vencimiento: string;
  chip: string;
}

@Component({
  selector: 'app-tarjetas-list',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './tarjetas-list.component.html',
  styleUrl: './tarjetas-list.component.scss'
})
export class TarjetasListComponent implements OnInit {
  tarjetas: Tarjeta[] = [];

  ngOnInit(): void {
    this.initializeTarjetas();
  }

  private initializeTarjetas(): void {
    this.tarjetas = [
      {
        id: 'TC-CAD-1',
        numero: '4532',
        numeroMascarado: '4532 •••• •••• 7891',
        titular: 'TERRA CANADA',
        tipo: 'Débito',
        moneda: 'CAD',
        saldoActual: 5500,
        saldoLimite: 10000,
        porcentajeUso: 55,
        estado: 'activa',
        vencimiento: '12/26',
        chip: 'TC-CAD-1'
      },
      {
        id: 'TC-CAD-2',
        numero: '5168',
        numeroMascarado: '5168 •••• •••• 3456',
        titular: 'TERRA CANADA',
        tipo: 'Débito',
        moneda: 'CAD',
        saldoActual: 3500,
        saldoLimite: 10000,
        porcentajeUso: 35,
        estado: 'activa',
        vencimiento: '08/25',
        chip: 'TC-CAD-2'
      },
      {
        id: 'TC-USD-1',
        numero: '3782',
        numeroMascarado: '3782 •••• •••• 2365',
        titular: 'TERRA CANADA',
        tipo: 'Débito',
        moneda: 'USD',
        saldoActual: 8500,
        saldoLimite: 15000,
        porcentajeUso: 57,
        estado: 'activa',
        vencimiento: '03/27',
        chip: 'TC-USD-1'
      },
      {
        id: 'TC-USD-2',
        numero: '6011',
        numeroMascarado: '6011 •••• •••• 9876',
        titular: 'TERRA CANADA',
        tipo: 'Débito',
        moneda: 'USD',
        saldoActual: 9800,
        saldoLimite: 15000,
        porcentajeUso: 65,
        estado: 'bloqueada',
        vencimiento: '11/24',
        chip: 'TC-USD-2'
      }
    ];
  }

  getStatusClass(estado: string): string {
    return `status-${estado}`;
  }

  getProgressColor(porcentaje: number): string {
    if (porcentaje >= 80) return '#d32f2f';
    if (porcentaje >= 60) return '#f57c00';
    return '#2d7a7a';
  }

  formatCurrency(valor: number, moneda: string): string {
    return `$${valor.toLocaleString()} ${moneda}`;
  }
}
