import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar';
import { TopHeaderComponent } from '../../shared/components/top-header/top-header';
import { ConfiguracionPerfilComponent } from './components/configuracion-perfil/configuracion-perfil.component';
import { ConfiguracionNotificacionesComponent } from './components/configuracion-notificaciones/configuracion-notificaciones.component';
import { ConfiguracionSeguridadComponent } from './components/configuracion-seguridad/configuracion-seguridad.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    TopHeaderComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionNotificacionesComponent,
    ConfiguracionSeguridadComponent,
    TranslatePipe
  ],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.scss'
})
export class ConfiguracionComponent implements OnInit {
  activeTab: string = 'perfil';

  tabs = [
    {
      id: 'perfil',
      label: 'Perfil de Usuario',
      icon: 'pi-user',
      description: 'Información personal y datos de contacto'
    },
    {
      id: 'notificaciones',
      label: 'Notificaciones',
      icon: 'pi-bell',
      description: 'Preferencias de notificaciones'
    },
    {
      id: 'seguridad',
      label: 'Seguridad',
      icon: 'pi-lock',
      description: 'Contraseña y seguridad de cuenta'
    }
  ];

  ngOnInit(): void {
  }

  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getActiveTabLabel(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return tab ? tab.label : '';
  }

  getActiveTabDescription(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return tab ? tab.description : '';
  }
}
