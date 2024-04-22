import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  @ViewChild('header', { read: ViewContainerRef })
  headerContainer!: ViewContainerRef;

  @ViewChild('menu', { read: ViewContainerRef })
  menuContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadLayout();
  }

  async loadLayout() {
    const header = await import('layout/Component/Header');
    this.headerContainer.createComponent(header.HeaderComponent);

    const menu = await import('layout/Component/Menu');
    this.menuContainer.createComponent(menu.MenuComponent);

    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }
}
