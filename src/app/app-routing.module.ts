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
import { ResaComponent } from "./components/resa/resa.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  {
    path: "resa",
    component: ResaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
