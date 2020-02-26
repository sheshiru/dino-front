import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router, NavigationEnd, Event } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  constructor(private uS: UserService, private router: Router) {}

  ngOnInit() {
    console.log("on init");

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log("subs event");

        this.uS.getUsers().subscribe(data => {
          this.users = data;
          console.log("data");
        });
      }
    });

    this.uS.getUsers().subscribe(data => (this.users = data));
  }
  deleteOne = id => {
    this.uS.deleteUser(id);
  };
  reloadCurrentRoute(): void {
    let currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
