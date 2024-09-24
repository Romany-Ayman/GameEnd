import { Component } from '@angular/core';
import { NavBlankComponent } from '../../component/nav-blank/nav-blank.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [NavBlankComponent, FooterComponent, RouterModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss',
})
export class BlankComponent {}
