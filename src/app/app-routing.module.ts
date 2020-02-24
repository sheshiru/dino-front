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
import { CalendarComponent } from "./components/pages/calendar/calendar.component";
import { ShowAddDateComponent } from "./components/admin/show-add-date/show-add-date.component";
import { NavbarComponent } from "./components/pages/navbar/navbar.component";
import { FooterComponent } from "./components/pages/footer/footer.component";
import { ResaComponent } from "./components/pages/resa/resa.component";
import { DetailsComponent } from "./components/pages/details/details.component";
import { LiveShowComponent } from './components/pages/live-show/live-show.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "resa",
    children: [
      { path: "", redirectTo: "/", pathMatch: "full" },
      { path: ":id", component: ResaComponent }
    ]
  },
  {
    path: "details",
    children: [
      { path: "", redirectTo: "/", pathMatch: "full" },
      { path: ":id", component: DetailsComponent }
    ]
  },
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
        path: "show-add-date",
        component: ShowAddDateComponent
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
