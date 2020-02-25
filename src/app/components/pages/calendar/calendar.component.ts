import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  shows: object;
  constructor(private sS: ShowService) {}

  ngOnInit() {
    this.sS.getShows().subscribe(data => (this.shows = data));
  }
}
