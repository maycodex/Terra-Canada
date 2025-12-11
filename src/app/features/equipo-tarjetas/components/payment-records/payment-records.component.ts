import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

export interface PaymentRecord {
  id: string;
  date: string;
  category: string;
  service: string;
  pass: string;
  amount: number;
  currency: string;
  user: string;
  status: 'PAGADO' | 'A PAGAR' | 'PENDIENTE';
  verification: 'SI' | 'NO';
  code: string;
  actions: string[];
}

@Component({
  selector: 'app-payment-records',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './payment-records.component.html',
  styleUrl: './payment-records.component.scss'
})
export class PaymentRecordsComponent implements OnInit {
  searchForm!: FormGroup;
  filterTab: 'todos' | 'pendientes' | 'pagados' = 'todos';
  
  allRecords: PaymentRecord[] = [
    {
      id: '1',
      date: '2024-01-15',
      category: 'Hoteles',
      service: 'Fairmont Banff Springs',
      pass: 'Fairmont Banff Springs',
      amount: 250.00,
      currency: 'CAD',
      user: 'Louise',
      status: 'A PAGAR',
      verification: 'NO',
      code: 'COD-001',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '2',
      date: '2024-01-14',
      category: 'Tours',
      service: 'Eagle Wing Tour',
      pass: 'Air Canada',
      amount: 450.50,
      currency: 'CAD',
      user: 'M',
      status: 'PAGADO',
      verification: 'NO',
      code: 'COD-002',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '3',
      date: '2024-01-13',
      category: 'Hoteles',
      service: 'Marriott International',
      pass: 'Marriott International',
      amount: 180.00,
      currency: 'EUR',
      user: 'Louise',
      status: 'A PAGAR',
      verification: 'NO',
      code: 'COD-003',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '4',
      date: '2024-01-12',
      category: 'Tours',
      service: 'Vancouver Foodie Tours',
      pass: 'Expedia',
      amount: 75.00,
      currency: 'CAD',
      user: 'M',
      status: 'PAGADO',
      verification: 'NO',
      code: 'COD-004',
      actions: ['view', 'edit', 'delete', 'download']
    },
    {
      id: '5',
      date: '2024-01-11',
      category: 'Hoteles',
      service: 'Hilton Garden Inn',
      pass: 'Booking.com',
      amount: 320.00,
      currency: 'USD',
      user: 'John',
      status: 'PAGADO',
      verification: 'SI',
      code: 'COD-005',
      actions: ['view', 'edit', 'delete', 'download']
    }
  ];

  displayedRecords: PaymentRecord[] = [];

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

  setFilterTab(tab: 'todos' | 'pendientes' | 'pagados'): void {
    this.filterTab = tab;
    this.filterRecords();
  }

  private filterRecords(): void {
    let filtered = this.allRecords;

    if (this.filterTab === 'pendientes') {
      filtered = filtered.filter(r => r.status === 'A PAGAR' || r.status === 'PENDIENTE');
    } else if (this.filterTab === 'pagados') {
      filtered = filtered.filter(r => r.status === 'PAGADO');
    }

    const searchTerm = this.searchForm.get('search')?.value?.toLowerCase() || '';
    if (searchTerm) {
      filtered = filtered.filter(r =>
        r.date.includes(searchTerm) ||
        r.category.toLowerCase().includes(searchTerm) ||
        r.service.toLowerCase().includes(searchTerm) ||
        r.pass.toLowerCase().includes(searchTerm) ||
        r.user.toLowerCase().includes(searchTerm) ||
        r.code.toLowerCase().includes(searchTerm)
      );
    }

    this.displayedRecords = filtered;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'PAGADO':
        return 'status-pagado';
      case 'A PAGAR':
        return 'status-apagar';
      case 'PENDIENTE':
        return 'status-pendiente';
      default:
        return '';
    }
  }

  getCategoryIcon(category: string): string {
    switch (category.toLowerCase()) {
      case 'hoteles':
        return 'pi pi-home';
      case 'tours':
        return 'pi pi-map';
      case 'vuelos':
        return 'pi pi-plane';
      default:
        return 'pi pi-tag';
    }
  }

  onAction(action: string, record: PaymentRecord): void {
    console.log(`Action: ${action}, Record:`, record);
  }
}
