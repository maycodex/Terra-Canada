import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-configuracion-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './configuracion-perfil.component.html',
  styleUrl: './configuracion-perfil.component.scss'
})
export class ConfiguracionPerfilComponent implements OnInit {
  profileForm = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@terracanada.com',
    telefono: '+1 (555) 123-4567',
    empresa: 'Terra Canada',
    cargo: 'Administrador',
    pais: 'Canadá',
    ciudad: 'Toronto'
  };

  isEditing: boolean = false;
  isSaving: boolean = false;

  ngOnInit(): void {
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    this.isSaving = true;
    setTimeout(() => {
      this.isSaving = false;
      this.isEditing = false;
      console.log('Perfil guardado:', this.profileForm);
    }, 1000);
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
