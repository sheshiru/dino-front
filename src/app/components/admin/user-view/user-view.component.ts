import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.scss"]
})
export class UserViewComponent implements OnInit {
  user;
  email: string;
  phone: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  id: string;
  constructor(
    private uS: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.uS.getOneUser(this.id).subscribe(data => {
        this.user = data;
      });
    });
  }
  deleteOne = () => {
    this.uS.deleteUser(this.id);
    this.router.navigate(["/admin/user-list"]);
  };
}
