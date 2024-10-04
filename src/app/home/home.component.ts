import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  router = inject(Router);

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  ngOnInit() {
    this.router.navigate(['/'], {replaceUrl: true});
  }

  sidebarVisible: boolean = true;
}
