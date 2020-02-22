import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  collapse: string;
  show;
  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.collapse = "collapse";
    this.showService.getShows().subscribe(data => {
      this.show = data;
    });
  }
}
