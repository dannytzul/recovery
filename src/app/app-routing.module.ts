import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'shin-splints', loadChildren: './pages/shin-splints/shin-splints.module#ShinSplintsPageModule' },
  { path: 'knee', loadChildren: './pages/knee/knee.module#KneePageModule' },
  { path: 'aches', loadChildren: './pages/aches/aches.module#AchesPageModule' },
  { path: 'stress', loadChildren: './pages/stress/stress.module#StressPageModule' },
  { path: 'hamstring', loadChildren: './pages/hamstring/hamstring.module#HamstringPageModule' },
  { path: 'achilles', loadChildren: './pages/achilles/achilles.module#AchillesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
