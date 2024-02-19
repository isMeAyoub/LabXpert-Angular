import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {SampleComponent} from "./features/sample/sample.component";
import { UserComponent } from './features/user/user.component';
import { ReagentComponent } from './features/reagent/reagent.component';
import {PatientComponent} from "./features/patient/patient.component";
import {SchedulingComponent} from "./features/scheduling/scheduling.component";
import { AnalysesComponent } from './features/analyses/analyses.component';
import { ResultComponent } from './features/result/result.component';
import {LoginComponent} from "./features/login/login.component";
import {AuthGuard} from "./core/guards/auth.guard";
/*
  To @Sofia and @Mariam here where we define the routes of our application
  the path is the url that will be displayed in the browser
  the component is the component that will be loaded when the path is called
  for example when you call localhost:4200/echantillon the SampleComponent will be loaded
  Attention: don't forget to add the routerLink to the sidebar component template
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Accueil Page' }
  },
  {
    path: 'echantillon',
    component: SampleComponent,
    canActivate: [AuthGuard],
    data: { title: 'Echantillon Page' }
  },
  {
    path: 'utilisateur',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { title: 'Utilisateur Page' }
  },
  {
    path: 'reagent',
    component: ReagentComponent,
    canActivate: [AuthGuard],
    data: { title: 'Réactifs Page' }
  },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuard],
    data: { title: 'Patient Page' }
  },
  {
    path: 'plannification',
    component: SchedulingComponent,
    canActivate: [AuthGuard],
    data: { title: 'Plannification Page' }
  },
  {
    path: 'analyses',
    component: AnalysesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Analyses Page' }
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [AuthGuard],
    data: { title: 'Résultats Page' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Page'}
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
