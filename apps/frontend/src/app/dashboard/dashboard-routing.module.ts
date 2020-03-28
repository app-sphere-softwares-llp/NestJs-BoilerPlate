import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardDataResolver } from '../resolver/dashboardData.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      nzAutoGenerate: false
    },
    resolve: [DashboardDataResolver],
    children: [
      {
        path: '', redirectTo: '', pathMatch: 'full',component: HomeComponent
      },
      {
        path: 'dashboard', component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
