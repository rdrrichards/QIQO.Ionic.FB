import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-location', loadChildren: './add-location/add-location.module#AddLocationPageModule' },  { path: 'view-location', loadChildren: './view-location/view-location.module#ViewLocationPageModule' },
  { path: 'edit-location', loadChildren: './edit-location/edit-location.module#EditLocationPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
