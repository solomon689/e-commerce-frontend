import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'producto/:productId',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule),
  },
  {
    path: '', redirectTo: '/inicio?page=1', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
