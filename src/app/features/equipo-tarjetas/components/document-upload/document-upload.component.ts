import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

interface DocumentCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  files: File[];
}

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss'
})
export class DocumentUploadComponent {
  documentCards: DocumentCard[] = [
    {
      id: 'invoices',
      title: 'Facturas',
      icon: 'pi pi-file-pdf',
      description: 'Adjunta archivos o haz clic',
      files: []
    },
    {
      id: 'bank-doc',
      title: 'Documento Banco',
      icon: 'pi pi-file-word',
      description: 'Adjunta un archivo o haz clic',
      files: []
    }
  ];

  onFileSelected(event: Event, cardId: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const card = this.documentCards.find(c => c.id === cardId);
      if (card) {
        card.files = Array.from(input.files);
        console.log(`Files selected for ${cardId}:`, card.files);
      }
    }
  }

  triggerFileInput(cardId: string): void {
    const input = document.getElementById(`file-input-${cardId}`) as HTMLInputElement;
    if (input) {
      input.click();
    }
  }

  removeFile(cardId: string, index: number): void {
    const card = this.documentCards.find(c => c.id === cardId);
    if (card) {
      card.files.splice(index, 1);
    }
  }

  searchDocuments(): void {
    console.log('Search documents clicked');
  }
}
