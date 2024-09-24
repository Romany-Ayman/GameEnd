import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { ListGamesService } from '../../core/services/list-games.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Ipcgames } from '../../core/interfaces/ipcgames';
import { Observable, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _ListGamesService = inject(ListGamesService);
  pcGame: Ipcgames[] = [];
  allGame: Ipcgames[] = [];
  getAllGamesSub!: Subscription;

  ngOnInit(): void {
    this.getAllGamesSub = this._ListGamesService.getAllGames().subscribe({
      next: (res) => {
        // console.log(res);
        this.allGame = res;
      },
    });

    this._ListGamesService.getPcGames().subscribe({
      next: (res) => {
        // console.log('soon', res);
        this.pcGame = res;
      },
    });
  }
  getSpecificGame(id: string): void {
    this._ListGamesService.getDetailsGames(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  ngOnDestroy(): void {
    this.getAllGamesSub?.unsubscribe();
  }
}
