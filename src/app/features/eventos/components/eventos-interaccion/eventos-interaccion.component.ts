import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface EventoInteraccion {
  id: string;
  fecha: string;
  usuario: string;
  accion: string;
  registro: string;
}

@Component({
  selector: 'app-eventos-interaccion',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './eventos-interaccion.component.html',
  styleUrl: './eventos-interaccion.component.scss'
})
export class EventosInteraccionComponent implements OnInit {
  eventos: EventoInteraccion[] = [];
  filteredEventos: EventoInteraccion[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.initializeEventos();
  }

  private initializeEventos(): void {
    this.eventos = [
      {
        id: 'INT001',
        fecha: '2025-12-09 16:45:12',
        usuario: 'usuario@terracanada.com',
        accion: 'Clic en Dashboard',
        registro: 'DAS-2025-001'
      },
      {
        id: 'INT002',
        fecha: '2025-12-09 16:30:55',
        usuario: 'gerente@terracanada.com',
        accion: 'Descarga de Reporte',
        registro: 'REP-2025-090'
      },
      {
        id: 'INT003',
        fecha: '2025-12-09 15:20:33',
        usuario: 'analista@terracanada.com',
        accion: 'Filtro de Datos',
        registro: 'FLT-2025-045'
      },
      {
        id: 'INT004',
        fecha: '2025-12-09 14:15:48',
        usuario: 'usuario@terracanada.com',
        accion: 'Envío de Formulario',
        registro: 'FRM-2025-023'
      },
      {
        id: 'INT005',
        fecha: '2025-12-09 13:50:20',
        usuario: 'administrador',
        accion: 'Edición de Configuración',
        registro: 'CFG-2025-013'
      },
      {
        id: 'INT006',
        fecha: '2025-12-09 12:30:15',
        usuario: 'gerente@terracanada.com',
        accion: 'Aprobación de Solicitud',
        registro: 'SOL-2025-067'
      },
      {
        id: 'INT007',
        fecha: '2025-12-08 17:10:42',
        usuario: 'analista@terracanada.com',
        accion: 'Exportación de Datos',
        registro: 'EXP-2025-034'
      },
      {
        id: 'INT008',
        fecha: '2025-12-08 16:05:30',
        usuario: 'usuario@terracanada.com',
        accion: 'Búsqueda Avanzada',
        registro: 'BUS-2025-089'
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
      evento.registro.toLowerCase().includes(term)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredEventos = [...this.eventos];
  }
}
