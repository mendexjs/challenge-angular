import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {DigitalAccountComponent} from "./routes/digital-account/digital-account.component";
import {AnticipationComponent} from "./routes/anticipation/anticipation.component";
import {LoansComponent} from "./routes/loans/loans.component";
import {AuthGuard} from "./shared/guards/auth.guard";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full',
    children: [
      { path: 'conta-digital', component: DigitalAccountComponent, pathMatch: 'full' },
      { path: 'antecipacao', component: AnticipationComponent, pathMatch: 'full' },
      { path: 'emprestimos', component: LoansComponent, pathMatch: 'full' },
      { path: 'bem-vindo', component: LoansComponent, pathMatch: 'full', canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
