import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/homepage').then(m => m.HomepageModule)
  },
  { path: 'explore', pathMatch: 'full', redirectTo: '' },
  { path: 'organizations', pathMatch: 'full', redirectTo: '' }
  // { path: 'explore', component: undefined },
  // { path: 'organizations', component: undefined },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
