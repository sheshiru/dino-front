import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { AppComponent } from './app.component';
//Import components
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserAddComponent } from "./components/user-add/user-add.component";
import { UserViewComponent } from "./components/user-view/user-view.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserDeleteComponent } from "./components/user-delete/user-delete.component";
import { ShowDeleteComponent } from "./components/show-delete/show-delete.component";
import { ShowListComponent } from "./components/show-list/show-list.component";
import { ShowAddComponent } from "./components/show-add/show-add.component";
import { ShowViewComponent } from "./components/show-view/show-view.component";
import { ShowEditComponent } from "./components/show-edit/show-edit.component";
import { NavbarComponent } from "./components/pages/navbar/navbar.component";
import { FooterComponent } from './components/pages/footer/footer.component';
import { LiveShowComponent } from './components/pages/live-show/live-show.component';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "home", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
