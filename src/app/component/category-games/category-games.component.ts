import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ListGamesService } from '../../core/services/list-games.service';
import { IallGame } from '../../core/interfaces/iall-game';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TremtextPipe } from '../../core/pipes/tremtext.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-games',
  standalone: true,
  imports: [RouterLink, TremtextPipe],
  templateUrl: './category-games.component.html',
  styleUrl: './category-games.component.scss',
})
export class CategoryGamesComponent implements OnInit, OnDestroy {
  private readonly _ListGamesService = inject(ListGamesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _Router = inject(Router);
  allGame: IallGame[] = [];
  namecategors: string = '';
  getCategoryGamesSub!: Subscription;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.namecategors = p.get('name') || '';

        if (this.namecategors) {
          this._ListGamesService.getCategoryGames(this.namecategors).subscribe({
            next: (res) => {
              // console.log(res);
              this.allGame = res;
            },
          });
        }
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
  ngOnDestroy(): void {
    this.getCategoryGamesSub?.unsubscribe();
  }
}
