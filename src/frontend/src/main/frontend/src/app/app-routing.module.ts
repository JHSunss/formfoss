import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {FormExampleComponent} from './component/form-example/form-example.component';
import {FormPrototypeComponent} from "./component/form-prototype/form-prototype.component";
import {SurfaceComponent} from "./surface/surface.component";
import {AppComponent} from "./app.component";

const routes:Routes = [
    {path: "", redirectTo: '/surface', pathMatch: 'full'},
    {path: "prototype", component: FormPrototypeComponent},
    {path: "surface", component: SurfaceComponent},
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
