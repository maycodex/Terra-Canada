import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar';
import { TopHeaderComponent } from '../../shared/components/top-header/top-header';
import { TarjetasListComponent } from './components/tarjetas-list/tarjetas-list.component';
import { TarjetasFormComponent } from './components/tarjetas-form/tarjetas-form.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    TopHeaderComponent,
    TarjetasListComponent,
    TarjetasFormComponent,
    TranslatePipe
  ],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.scss'
})
export class TarjetasComponent implements OnInit {
  selectedAction: string = '';
  showForm: boolean = false;

  ngOnInit(): void {
  }

  onActionChange(): void {
    if (this.selectedAction) {
      this.showForm = true;
    } else {
      this.showForm = false;
    }
  }

  closeForm(): void {
    this.showForm = false;
    this.selectedAction = '';
  }

  onFormSubmit(): void {
    this.closeForm();
  }
}
