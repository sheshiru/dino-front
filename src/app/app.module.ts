import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

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
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
