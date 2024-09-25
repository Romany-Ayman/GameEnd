import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { HomeComponent } from './component/home/home.component';
import { GameDelailsComponent } from './component/game-delails/game-delails.component';
import { NotfontComponent } from './component/notfont/notfont.component';

import { AllGamesComponent } from './component/all-games/all-games.component';
import { CategoryGamesComponent } from './component/category-games/category-games.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: BlankComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'allgames',
        component: AllGamesComponent,
      },
      { path: 'CategoryGames/:name', component: CategoryGamesComponent },
      { path: 'delails/:id', component: GameDelailsComponent },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: '**',
    component: NotfontComponent,
  },
];
