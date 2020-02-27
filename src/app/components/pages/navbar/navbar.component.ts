import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private sS: ShowService) {}
  shows;
  ngOnInit() {
    this.sS.getShows().subscribe(data => (this.shows = data));
  }
}
