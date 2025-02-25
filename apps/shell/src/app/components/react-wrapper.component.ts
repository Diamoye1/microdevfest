import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: '<div #vc></div>',

})
export class ReactWrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true }) vc!: ElementRef;
  constructor(private route: ActivatedRoute) {}
  async ngAfterContentInit(): Promise<void> {
    const elementName = this.route.snapshot.data['elementName'];
    const loader = this.route.snapshot.data['loadChildren'];
    await loader();
    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
  }
}
