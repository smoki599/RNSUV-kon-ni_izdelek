import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductItemComponent } from './products/product-item/product-item.component';
//import { ProductService } from './services/auth/product.service';
// import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { iterceptor } from './services/interceptor/interceptor.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { VsebinaComponent } from './components/vsebina/vsebina.component';
import { filmComponent } from './components/film/film.component';
import { knjigaComponent } from './components/knjiga/knjiga.component';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    VsebinaComponent,
    filmComponent,
    knjigaComponent,
    ReviewListComponent,
    ReviewFormComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    //ProductService,
    provideHttpClient(withInterceptors([iterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
