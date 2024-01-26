import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './list/welcome/welcome.component';
import { LoginComponent } from './list/login/login.component';
import { ErrorComponent } from './list/error/error.component';
import { ListTodosComponent } from './list/list-todos/list-todos.component';
import { MenuComponent } from './list/menu/menu.component';
import { FooterComponent } from './list/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
