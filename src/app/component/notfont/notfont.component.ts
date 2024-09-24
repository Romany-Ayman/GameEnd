import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notfont',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './notfont.component.html',
  styleUrl: './notfont.component.scss',
})
export class NotfontComponent {}
