import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface EventoRegistro {
  id: string;
  fecha: string;
  usuario: string;
  accion: string;
  documento: string;
}

@Component({
  selector: 'app-eventos-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './eventos-registro.component.html',
  styleUrl: './eventos-registro.component.scss'
})
export class EventosRegistroComponent implements OnInit {
  eventos: EventoRegistro[] = [];
  filteredEventos: EventoRegistro[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.initializeEventos();
  }

  private initializeEventos(): void {
    this.eventos = [
      {
        id: 'REG001',
        fecha: '2025-12-09 14:30:22',
        usuario: 'administrador',
        accion: 'Registro de Pago',
        documento: 'PAG-2025-001'
      },
      {
        id: 'REG002',
        fecha: '2025-12-09 13:15:45',
        usuario: 'usuario@terracanada.com',
        accion: 'Actualización de Perfil',
        documento: 'USR-2025-045'
      },
      {
        id: 'REG003',
        fecha: '2025-12-09 12:00:10',
        usuario: 'gerente@terracanada.com',
        accion: 'Aprobación de Transacción',
        documento: 'TRX-2025-123'
      },
      {
        id: 'REG004',
        fecha: '2025-12-09 11:45:33',
        usuario: 'administrador',
        accion: 'Creación de Usuario',
        documento: 'USR-2025-046'
      },
      {
        id: 'REG005',
        fecha: '2025-12-09 10:30:15',
        usuario: 'analista@terracanada.com',
        accion: 'Generación de Reporte',
        documento: 'REP-2025-089'
      },
      {
        id: 'REG006',
        fecha: '2025-12-08 16:20:50',
        usuario: 'usuario@terracanada.com',
        accion: 'Descarga de Documento',
        documento: 'DOC-2025-234'
      },
      {
        id: 'REG007',
        fecha: '2025-12-08 15:10:25',
        usuario: 'administrador',
        accion: 'Cambio de Configuración',
        documento: 'CFG-2025-012'
      },
      {
        id: 'REG008',
        fecha: '2025-12-08 14:05:40',
        usuario: 'gerente@terracanada.com',
        accion: 'Revisión de Auditoría',
        documento: 'AUD-2025-056'
      }
    ];
    this.filteredEventos = [...this.eventos];
  }

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      this.filteredEventos = [...this.eventos];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredEventos = this.eventos.filter(evento =>
      evento.fecha.toLowerCase().includes(term) ||
      evento.usuario.toLowerCase().includes(term) ||
      evento.accion.toLowerCase().includes(term) ||
      evento.documento.toLowerCase().includes(term)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredEventos = [...this.eventos];
  }
}
