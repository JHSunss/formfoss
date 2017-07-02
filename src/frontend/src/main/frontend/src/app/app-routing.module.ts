import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {FormExampleComponent} from './component/form-example/form-example.component';

const routes:Routes = [
    {path: "", redirectTo: '/form', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "list", component: UsersComponent},
    {path: "users/:id", component: UserDetailComponent},
    {path: 'form', component: FormExampleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
