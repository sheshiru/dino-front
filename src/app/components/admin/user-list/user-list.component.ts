import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  constructor(private uS: UserService) {}

  ngOnInit() {
    this.uS.getUsers().subscribe(data => (this.users = data));
  }
  deleteOne = id => {
    return this.uS.deleteUser(id);
  };
}
