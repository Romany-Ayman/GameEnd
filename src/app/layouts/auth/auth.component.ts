import { Component } from '@angular/core';
import { NavAuthComponent } from '../../component/nav-auth/nav-auth.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NavAuthComponent, FooterComponent, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
