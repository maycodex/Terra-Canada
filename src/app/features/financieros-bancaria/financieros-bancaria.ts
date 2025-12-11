import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar';
import { TopHeaderComponent } from '../../shared/components/top-header/top-header';
import { PaymentFormComponent } from '../equipo-tarjetas/components/payment-form/payment-form.component';
import { DocumentUploadComponent } from '../equipo-tarjetas/components/document-upload/document-upload.component';
import { BancaryPaymentRecordsComponent } from './components/bancary-payment-records/bancary-payment-records.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-financieros-bancaria',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidebarComponent,
    TopHeaderComponent,
    PaymentFormComponent,
    DocumentUploadComponent,
    BancaryPaymentRecordsComponent,
    TranslatePipe
  ],
  templateUrl: './financieros-bancaria.html',
  styleUrl: './financieros-bancaria.scss'
})
export class FinancierosBancariaComponent implements OnInit {
  showPaymentForm = false;
  paymentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.paymentForm = this.formBuilder.group({
      serviceType: ['', Validators.required],
      prestationService: ['', Validators.required],
      fee: ['', Validators.required],
      cards: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['0.00', Validators.required],
      notes: ['']
    });
  }

  togglePaymentForm(): void {
    this.showPaymentForm = !this.showPaymentForm;
  }

  onSubmitPayment(): void {
    if (this.paymentForm.valid) {
      console.log('Payment submitted:', this.paymentForm.value);
      this.showPaymentForm = false;
      this.paymentForm.reset();
    }
  }

  onCancel(): void {
    this.showPaymentForm = false;
    this.paymentForm.reset();
  }
}
