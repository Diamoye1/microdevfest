import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarComponent } from './components/header/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule, NavbarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shell';
  resetPosition() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
