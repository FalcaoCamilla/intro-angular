import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent, children: [ // sobre/:id/:username
    {path: 'camilla', component: SobreComponent} // sobre/camilla
  ] },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)},
  //dashboard tem um lazy loading, quando a importação do dashboard module der certo, chamamos ele
  { path: '404', component: PageErrorComponent },
  //a rota coringa é uma rota inexistente
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})], //localhost:4200/#
  exports: [RouterModule]
})
export class AppRoutingModule { }
