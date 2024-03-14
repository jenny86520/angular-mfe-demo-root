import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  @ViewChild('header', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadHeader();
  }

  async loadHeader() {
    const m = await import('layout/Component/Header');
    const ref = this.viewContainer.createComponent(m.HeaderComponent);
    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }
}
