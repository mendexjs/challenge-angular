import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {DigitalAccountComponent} from "./routes/digital-account/digital-account.component";
import {AnticipationComponent} from "./routes/anticipation/anticipation.component";
import {LoansComponent} from "./routes/loans/loans.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {WelcomeComponent} from "./routes/welcome/welcome.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'home/conta-digital', component: DigitalAccountComponent, pathMatch: 'full' },
  { path: 'home/antecipacao', component: AnticipationComponent, pathMatch: 'full' },
  { path: 'home/emprestimos', component: LoansComponent, pathMatch: 'full' },
  { path: 'bem-vindo', component: WelcomeComponent, pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
