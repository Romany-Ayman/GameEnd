import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ListGamesService {
  private readonly _HttpClient = inject(HttpClient);

  getAllGames(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrlGm}`);
  }

  getPcGames(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrlGm}?platform=pc`);
  }
  getDetailsGames(id: string | number): Observable<any> {
    return this._HttpClient.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
    );
  }
  getCategoryGames(name: string): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrlGm}?category=${name}`);
  }
}
