import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"]
})
export class UserEditComponent implements OnInit {
  user;
  email: string;
  phone: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  id: string;
  constructor(private uS: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.uS.getOneUser(this.id).subscribe(data => {
        this.user = data;
      });
    });
  }
  editOneUser = () => {
    this.uS.editOneUser(this.user);
  };
}
