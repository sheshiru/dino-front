import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"]
})
export class UserAddComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  user: User;
  constructor(private userService: UserService) {}
  ngOnInit() {}

  addUser = (form: NgForm) => {
    this.user = new User(
      this.username,
      this.password,
      this.email,
      this.phone,
      this.firstName,
      this.lastName
    );
    this.userService.createUser(this.user);
    {
      try {
        console.log(this.user);
      } catch (error) {
        console.log(error);
      }
    }
    form.reset();
  };
}
