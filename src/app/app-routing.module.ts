import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import { ProductItemComponent } from './product-item/product-item.component';
// import { CreateProductComponent } from './create-product/create-product.component';
import { authGuard } from './guards/auth.guard';
import { LogoutComponent } from './auth/logout/logout.component';
import { VsebinaComponent } from './components/vsebina/vsebina.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'index', component: VsebinaComponent, canActivate: [authGuard]},
  { path: 'reviews/:type/:vsebinaId', canActivate: [authGuard], component: ReviewComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
