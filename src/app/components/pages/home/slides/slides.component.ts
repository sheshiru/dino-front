import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html",
  styleUrls: ["./slides.component.scss"]
})

export class SlidesComponent implements OnInit {
  shows;
  constructor(private sS: ShowService) {}

  ngOnInit() {
    this.sS.getShows().subscribe(data => {
      this.shows = data;
    });
  }
}
