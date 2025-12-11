import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

export interface CardPaymentRecord {
  id: string;
  date: string;
  cardType: string;
  cardNumber: string;
  merchant: string;
  amount: number;
  currency: string;
  user: string;
  status: 'APROBADO' | 'PENDIENTE' | 'RECHAZADO';
  verification: 'SI' | 'NO';
  code: string;
  actions: string[];
}

@Component({
  selector: 'app-card-payment-records',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './card-payment-records.component.html',
  styleUrl: './card-payment-records.component.scss'
})
export class CardPaymentRecordsComponent implements OnInit {
  searchForm!: FormGroup;
  filterTab: 'todos' | 'pendientes' | 'aprobados' = 'todos';
  
  allRecords: CardPaymentRecord[] = [
    {
      id: '1',
      date: '2024-01-15',
      cardType: 'Visa Débito',
      cardNumber: '****1234',
      merchant: 'Amazon.ca',
      amount: 125.50,
      currency: 'CAD',
      user: 'Admin',
      status: 'APROBADO',
      verification: 'SI',
      code: 'CRD-001',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '2',
      date: '2024-01-14',
      cardType: 'Mastercard Crédito',
      cardNumber: '****5678',
      merchant: 'Shopify Store',
      amount: 89.99,
      currency: 'USD',
      user: 'Gerente',
      status: 'PENDIENTE',
      verification: 'NO',
      code: 'CRD-002',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '3',
      date: '2024-01-13',
      cardType: 'Visa Crédito',
      cardNumber: '****9012',
      merchant: 'Hotel Booking',
      amount: 450.00,
      currency: 'CAD',
      user: 'Admin',
      status: 'APROBADO',
      verification: 'SI',
      code: 'CRD-003',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '4',
      date: '2024-01-12',
      cardType: 'Amex',
      cardNumber: '****3456',
      merchant: 'Restaurant XYZ',
      amount: 65.75,
      currency: 'CAD',
      user: 'Contador',
      status: 'RECHAZADO',
      verification: 'NO',
      code: 'CRD-004',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '5',
      date: '2024-01-11',
      cardType: 'Visa Débito',
      cardNumber: '****7890',
      merchant: 'Gas Station',
      amount: 55.00,
      currency: 'CAD',
      user: 'Admin',
      status: 'APROBADO',
      verification: 'SI',
      code: 'CRD-005',
      actions: ['view', 'edit', 'delete', 'download']
    }
  ];

  displayedRecords: CardPaymentRecord[] = [];

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

  setFilterTab(tab: 'todos' | 'pendientes' | 'aprobados'): void {
    this.filterTab = tab;
    this.filterRecords();
  }

  private filterRecords(): void {
    let filtered = this.allRecords;

    if (this.filterTab === 'pendientes') {
      filtered = filtered.filter(r => r.status === 'PENDIENTE');
    } else if (this.filterTab === 'aprobados') {
      filtered = filtered.filter(r => r.status === 'APROBADO');
    }

    const searchTerm = this.searchForm.get('search')?.value?.toLowerCase() || '';
    if (searchTerm) {
      filtered = filtered.filter(r =>
        r.date.includes(searchTerm) ||
        r.cardType.toLowerCase().includes(searchTerm) ||
        r.cardNumber.toLowerCase().includes(searchTerm) ||
        r.merchant.toLowerCase().includes(searchTerm) ||
        r.user.toLowerCase().includes(searchTerm) ||
        r.code.toLowerCase().includes(searchTerm)
      );
    }

    this.displayedRecords = filtered;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'APROBADO':
        return 'status-aprobado';
      case 'PENDIENTE':
        return 'status-pendiente';
      case 'RECHAZADO':
        return 'status-rechazado';
      default:
        return '';
    }
  }

  getCardIcon(cardType: string): string {
    if (cardType.toLowerCase().includes('visa')) {
      return 'pi pi-credit';
    } else if (cardType.toLowerCase().includes('mastercard')) {
      return 'pi pi-credit';
    } else if (cardType.toLowerCase().includes('amex')) {
      return 'pi pi-credit';
    }
    return 'pi pi-credit';
  }

  onAction(action: string, record: CardPaymentRecord): void {
    console.log(`Action: ${action}, Record:`, record);
  }
}
