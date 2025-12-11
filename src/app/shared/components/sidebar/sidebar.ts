import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DashboardService } from '../../../core/services/dashboard.service';
import { MenuItem } from '../../models/dashboard.model';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationKey } from '../../models/translations.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [];
  activeRoute: string = '/dashboard';
  userInitials: string = 'AD';
  userName: string = 'Administrador';

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dashboardService.getMenuItems().subscribe((items) => {
      this.menuItems = items;
    });
    this.activeRoute = this.router.url;
  }

  navigateTo(route: string): void {
    this.activeRoute = route;
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  getMenuLabel(item: MenuItem): TranslationKey {
    return (item.translationKey as TranslationKey) || (item.label as TranslationKey);
  }
}
