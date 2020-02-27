import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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
import { FooterComponent } from "./components/pages/footer/footer.component";
import { NavbarComponent } from "./components/pages/navbar/navbar.component";
import { LiveShowComponent } from "./components/pages/live-show/live-show.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { SlidesComponent } from "./components/pages/home/slides/slides.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ResaComponent } from "./components/pages/resa/resa.component";
import { DetailsComponent } from "./components/pages/details/details.component";
import { CalendarComponent } from "./components/pages/calendar/calendar.component";
import { ShowAddDateComponent } from "./components/admin/show-add-date/show-add-date.component";
import { MailService } from "./services/mail.service";
import { NotFoundComponent } from "./components/pages/not-found/not-found.component";
import { ParkingComponent } from './components/pages/parking/parking.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserViewComponent,
    UserEditComponent,
    UserDeleteComponent,
    ShowDeleteComponent,
    ShowListComponent,
    ShowAddComponent,
    ShowViewComponent,
    ShowEditComponent,
    FooterComponent,
    NavbarComponent,
    LiveShowComponent,
    HomeComponent,
    SlidesComponent,
    ContactComponent,
    FooterComponent,
    ResaComponent,
    DetailsComponent,
    CalendarComponent,
    ShowAddDateComponent,
    NotFoundComponent,
    ParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MailService, Validators],
  bootstrap: [AppComponent]
})
export class AppModule {}
