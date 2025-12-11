import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

export interface BancaryPaymentRecord {
  id: string;
  date: string;
  bank: string;
  accountType: string;
  reference: string;
  amount: number;
  currency: string;
  user: string;
  status: 'COMPLETADO' | 'PENDIENTE' | 'RECHAZADO';
  verification: 'SI' | 'NO';
  code: string;
  actions: string[];
}

@Component({
  selector: 'app-bancary-payment-records',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './bancary-payment-records.component.html',
  styleUrl: './bancary-payment-records.component.scss'
})
export class BancaryPaymentRecordsComponent implements OnInit {
  searchForm!: FormGroup;
  filterTab: 'todos' | 'pendientes' | 'completados' = 'todos';
  
  allRecords: BancaryPaymentRecord[] = [
    {
      id: '1',
      date: '2024-01-15',
      bank: 'RBC Royal Bank',
      accountType: 'Cuenta Corriente',
      reference: 'TRF-2024-001',
      amount: 5000.00,
      currency: 'CAD',
      user: 'Admin',
      status: 'COMPLETADO',
      verification: 'SI',
      code: 'BNK-001',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '2',
      date: '2024-01-14',
      bank: 'TD Bank',
      accountType: 'Cuenta de Ahorros',
      reference: 'TRF-2024-002',
      amount: 2500.50,
      currency: 'CAD',
      user: 'Gerente',
      status: 'PENDIENTE',
      verification: 'NO',
      code: 'BNK-002',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '3',
      date: '2024-01-13',
      bank: 'Scotiabank',
      accountType: 'Cuenta Corriente',
      reference: 'TRF-2024-003',
      amount: 7500.00,
      currency: 'USD',
      user: 'Admin',
      status: 'COMPLETADO',
      verification: 'SI',
      code: 'BNK-003',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '4',
      date: '2024-01-12',
      bank: 'BMO',
      accountType: 'Cuenta de Ahorros',
      reference: 'TRF-2024-004',
      amount: 1200.00,
      currency: 'CAD',
      user: 'Contador',
      status: 'RECHAZADO',
      verification: 'NO',
      code: 'BNK-004',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '5',
      date: '2024-01-11',
      bank: 'CIBC',
      accountType: 'Cuenta Corriente',
      reference: 'TRF-2024-005',
      amount: 3800.75,
      currency: 'CAD',
      user: 'Admin',
      status: 'COMPLETADO',
      verification: 'SI',
      code: 'BNK-005',
      actions: ['view', 'edit', 'delete', 'download']
    }
  ];

  displayedRecords: BancaryPaymentRecord[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.filterRecords();
  }

  private initializeForm(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.searchForm.get('search')?.valueChanges.subscribe(() => {
      this.filterRecords();
    });
  }

  setFilterTab(tab: 'todos' | 'pendientes' | 'completados'): void {
    this.filterTab = tab;
    this.filterRecords();
  }

  private filterRecords(): void {
    let filtered = this.allRecords;

    if (this.filterTab === 'pendientes') {
      filtered = filtered.filter(r => r.status === 'PENDIENTE');
    } else if (this.filterTab === 'completados') {
      filtered = filtered.filter(r => r.status === 'COMPLETADO');
    }

    const searchTerm = this.searchForm.get('search')?.value?.toLowerCase() || '';
    if (searchTerm) {
      filtered = filtered.filter(r =>
        r.date.includes(searchTerm) ||
        r.bank.toLowerCase().includes(searchTerm) ||
        r.accountType.toLowerCase().includes(searchTerm) ||
        r.reference.toLowerCase().includes(searchTerm) ||
        r.user.toLowerCase().includes(searchTerm) ||
        r.code.toLowerCase().includes(searchTerm)
      );
    }

    this.displayedRecords = filtered;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'COMPLETADO':
        return 'status-completado';
      case 'PENDIENTE':
        return 'status-pendiente';
      case 'RECHAZADO':
        return 'status-rechazado';
      default:
        return '';
    }
  }

  getBankIcon(bank: string): string {
    return 'pi pi-building';
  }

  onAction(action: string, record: BancaryPaymentRecord): void {
    console.log(`Action: ${action}, Record:`, record);
  }
}
