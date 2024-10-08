import { Component, inject, OnInit } from '@angular/core';
import { ListGamesService } from '../../core/services/list-games.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IdelailsGame } from '../../core/interfaces/idelails-game';
import { TremtextPipe } from '../../core/pipes/tremtext.pipe';

@Component({
  selector: 'app-game-delails',
  standalone: true,
  imports: [RouterLink, TremtextPipe],
  templateUrl: './game-delails.component.html',
  styleUrl: './game-delails.component.scss',
})
export class GameDelailsComponent implements OnInit {
  private readonly _ListGamesService = inject(ListGamesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _Router = inject(Router);
  detailsGame: IdelailsGame = {} as IdelailsGame;

  idgame: any = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.idgame = p.get('id');
      },
    });
    this._ListGamesService.getDetailsGames(this.idgame).subscribe({
      next: (res) => {
        console.log(res);
        this.detailsGame = res;
      },
    });
  }
  checkAndNavigate(url: string): void {
    if (localStorage.getItem('uesrName') == null) {
      this._Router.navigate(['/login']);
    } else {
      window.open(url, '_blank');
    }
  }
}
