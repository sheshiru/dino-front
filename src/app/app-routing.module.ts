import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { AppComponent } from './app.component';
//Import components
import { UserListComponent } from "./components/admin/user-list/user-list.component";
import { UserAddComponent } from "./components/admin/user-add/user-add.component";
import { UserViewComponent } from "./components/admin/user-view/user-view.component";
import { UserEditComponent } from "./components/admin/user-edit/user-edit.component";
import { UserDeleteComponent } from "./components/admin/user-delete/user-delete.component";
import { ShowDeleteComponent } from "./components/admin/show-delete/show-delete.component";
import { ShowListComponent } from "./components/admin/show-list/show-list.component";
import { ShowAddComponent } from "./components/admin/show-add/show-add.component";
import { ShowViewComponent } from "./components/admin/show-view/show-view.component";
import { ShowEditComponent } from "./components/admin/show-edit/show-edit.component";
import { NavbarComponent } from "./components/pages/navbar/navbar.component";
import { FooterComponent } from "./components/pages/footer/footer.component";
import { LiveShowComponent } from "./components/pages/live-show/live-show.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ResaComponent } from "./components/resa/resa.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "home", component: HomeComponent },
  { path: "resa", component: ResaComponent},
  { path: "admin",
  children: [
    { path: "", component: ShowListComponent },
    { path: "shows", component: ShowListComponent },
    { path: "shows/:id", component: ShowViewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
