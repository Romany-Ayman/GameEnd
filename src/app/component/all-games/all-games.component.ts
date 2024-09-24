import {
  Component,
  HostListener,
  OnInit,
  inject,
  OnDestroy,
} from '@angular/core';
import { ListGamesService } from '../../core/services/list-games.service';
import { IallGame } from '../../core/interfaces/iall-game';
import { TremtextPipe } from '../../core/pipes/tremtext.pipe';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { log } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-games',
  standalone: true,
  imports: [TremtextPipe, NgClass, RouterLink],
  templateUrl: './all-games.component.html',
  styleUrl: './all-games.component.scss',
})
export class AllGamesComponent implements OnInit, OnDestroy {
  private readonly _ListGamesService = inject(ListGamesService);

  allgame: IallGame[] = [];
  isvisible: boolean = true;
  newclass: string = 'none';
  getAllGamesSub!: Subscription;

  ngOnInit(): void {
    this.getAllGamesSub = this._ListGamesService.getAllGames().subscribe({
      next: (res) => {
        console.log(res);
        this.allgame = res;
      },
    });
  }

  getSpecificGame(id: string | number): void {
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
