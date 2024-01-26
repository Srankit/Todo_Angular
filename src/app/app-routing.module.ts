import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './list/login/login.component';
import { WelcomeComponent } from './list/welcome/welcome.component';
import { ErrorComponent } from './list/error/error.component';
import { ListTodosComponent } from './list/list-todos/list-todos.component';

const routes: Routes = [
  //{ path: '/', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'todo', component: ListTodosComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
