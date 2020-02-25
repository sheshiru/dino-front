import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.component.scss"]
})
export class SlidesComponent implements OnInit {
  shows: object;
  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.getShows().subscribe(data => (this.shows = data));
  }
}
