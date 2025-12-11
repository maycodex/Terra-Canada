import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface Documento {
  id: string;
  nombre: string;
  modulo: string;
  fecha: string;
  tipo: string;
  tamaño: string;
  icono: string;
}

interface ModuloDocumentos {
  nombre: string;
  modulo: string;
  documentos: Documento[];
}

@Component({
  selector: 'app-documentos-list',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './documentos-list.component.html',
  styleUrl: './documentos-list.component.scss'
})
export class DocumentosListComponent implements OnInit, OnChanges {
  @Input() dateFilter: string = '';

  modulosDocumentos: ModuloDocumentos[] = [];
  filteredModulosDocumentos: ModuloDocumentos[] = [];

  ngOnInit(): void {
    this.initializeDocumentos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateFilter']) {
      this.filterDocumentos();
    }
  }

  private initializeDocumentos(): void {
    this.modulosDocumentos = [
      {
        nombre: 'Equipo - Tarjetas',
        modulo: 'equipo-tarjetas',
        documentos: [
          {
            id: 'DOC001',
            nombre: 'factura_tilden_holde...',
            modulo: 'Equipo - Tarjetas',
            fecha: '2024-01-15',
            tipo: 'PDF',
            tamaño: '2.4 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC002',
            nombre: 'contrato_nuevo_ener...',
            modulo: 'Equipo - Tarjetas',
            fecha: '2024-01-15',
            tipo: 'PDF',
            tamaño: '1.8 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC003',
            nombre: 'factura_air_canada.pdf',
            modulo: 'Equipo - Tarjetas',
            fecha: '2024-01-14',
            tipo: 'PDF',
            tamaño: '3.1 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC004',
            nombre: 'recibo_maestri.jpg',
            modulo: 'Equipo - Tarjetas',
            fecha: '2024-01-13',
            tipo: 'JPG',
            tamaño: '856 KB',
            icono: 'pi-image'
          }
        ]
      },
      {
        nombre: 'Financieros - C. Bancaria',
        modulo: 'financieros-bancaria',
        documentos: [
          {
            id: 'DOC005',
            nombre: 'factura_booking_cam...',
            modulo: 'Financieros - C. Bancaria',
            fecha: '2024-01-15',
            tipo: 'PDF',
            tamaño: '2.1 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC006',
            nombre: 'transferencia_bancari...',
            modulo: 'Financieros - C. Bancaria',
            fecha: '2024-01-15',
            tipo: 'PDF',
            tamaño: '1.5 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC007',
            nombre: 'factura_air_canada.pdf',
            modulo: 'Financieros - C. Bancaria',
            fecha: '2024-01-13',
            tipo: 'PDF',
            tamaño: '2.8 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC008',
            nombre: 'estado_cuenta_enero.pdf',
            modulo: 'Financieros - C. Bancaria',
            fecha: '2024-01-12',
            tipo: 'PDF',
            tamaño: '4.2 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC009',
            nombre: 'comprobante_pago.pdf',
            modulo: 'Financieros - C. Bancaria',
            fecha: '2024-01-11',
            tipo: 'PDF',
            tamaño: '1.9 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC010',
            nombre: 'recibo_servicios.pdf',
            modulo: 'Financieros - C. Bancaria',
            fecha: '2024-01-10',
            tipo: 'PDF',
            tamaño: '2.3 MB',
            icono: 'pi-file-pdf'
          }
        ]
      },
      {
        nombre: 'Financieros - Tarjetas',
        modulo: 'financieros-tarjetas',
        documentos: [
          {
            id: 'DOC011',
            nombre: 'factura_expedia.pdf',
            modulo: 'Financieros - Tarjetas',
            fecha: '2024-01-15',
            tipo: 'PDF',
            tamaño: '2.6 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC012',
            nombre: 'estado_cuenta_tarje...',
            modulo: 'Financieros - Tarjetas',
            fecha: '2024-01-15',
            tipo: 'PDF',
            tamaño: '3.4 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC013',
            nombre: 'factura_air_canada.pdf',
            modulo: 'Financieros - Tarjetas',
            fecha: '2024-01-13',
            tipo: 'PDF',
            tamaño: '2.9 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC014',
            nombre: 'recibo_tilden.jpg',
            modulo: 'Financieros - Tarjetas',
            fecha: '2024-01-13',
            tipo: 'JPG',
            tamaño: '924 KB',
            icono: 'pi-image'
          },
          {
            id: 'DOC015',
            nombre: 'factura_weight.pdf',
            modulo: 'Financieros - Tarjetas',
            fecha: '2024-01-12',
            tipo: 'PDF',
            tamaño: '2.1 MB',
            icono: 'pi-file-pdf'
          },
          {
            id: 'DOC016',
            nombre: 'factura_air_canada.pdf',
            modulo: 'Financieros - Tarjetas',
            fecha: '2024-01-12',
            tipo: 'PDF',
            tamaño: '2.7 MB',
            icono: 'pi-file-pdf'
          }
        ]
      }
    ];

    this.filteredModulosDocumentos = [...this.modulosDocumentos];
  }

  private filterDocumentos(): void {
    if (!this.dateFilter) {
      this.filteredModulosDocumentos = JSON.parse(JSON.stringify(this.modulosDocumentos));
      return;
    }

    this.filteredModulosDocumentos = this.modulosDocumentos
      .map(modulo => ({
        ...modulo,
        documentos: modulo.documentos.filter(doc => doc.fecha === this.dateFilter)
      }))
      .filter(modulo => modulo.documentos.length > 0);
  }

  getFileIcon(tipo: string): string {
    if (tipo === 'PDF') return 'pi pi-file-pdf';
    if (tipo === 'JPG' || tipo === 'PNG') return 'pi pi-image';
    if (tipo === 'DOC' || tipo === 'DOCX') return 'pi pi-file-word';
    if (tipo === 'XLS' || tipo === 'XLSX') return 'pi pi-file-excel';
    return 'pi pi-file';
  }

  downloadDocument(documento: Documento): void {
    console.log('Descargando:', documento.nombre);
  }

  deleteDocument(documento: Documento): void {
    console.log('Eliminando:', documento.nombre);
  }
}
