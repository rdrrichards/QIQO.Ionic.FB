import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'add-location', loadChildren: () => import('./add-location/add-location.module').then(m => m.AddLocationPageModule) },  { path: 'view-location', loadChildren: () => import('./view-location/view-location.module').then(m => m.ViewLocationPageModule) },
  { path: 'edit-location', loadChildren: () => import('./edit-location/edit-location.module').then(m => m.EditLocationPageModule) }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
