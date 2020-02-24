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
import { HomeComponent } from "./components/pages/home/home.component";
import { ResaComponent } from "./components/pages/resa/resa.component";
import { DetailsComponent } from "./components/pages/details/details.component";
import { CalendarComponent } from "./components/pages/calendar/calendar.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "home", component: HomeComponent },
  { path: "resa", component: ResaComponent },
  { path: "details", component: DetailsComponent },
  { path: "calendar", component: CalendarComponent },
  {
    path: "admin",
    children: [
      { path: "", component: ShowListComponent },
      {
        path: "show-add",
        component: ShowAddComponent
      },
      {
        path: "show-add",
        component: ShowEditComponent
      },
      {
        path: "show-edit",
        component: ShowAddComponent
      },
      { path: "show/:id", component: ShowViewComponent },
      {
        path: "show-delete",
        component: ShowDeleteComponent
      },
      { path: "user-list", component: UserListComponent },
      { path: "user-add", component: UserAddComponent },
      { path: "user-edit", component: UserEditComponent },
      { path: "user/:id", component: UserViewComponent },
      { path: "user-delete", component: UserDeleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
