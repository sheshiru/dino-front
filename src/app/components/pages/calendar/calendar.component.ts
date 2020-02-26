import { Component, OnInit, Input } from "@angular/core";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  shows: object;
  @Input() resaStatus: boolean = false;

  constructor(private sS: ShowService) {}

  ngOnInit() {
    this.sS.getShows().subscribe(data => (this.shows = data));
  }
  getResaStatus() {
    return this.resaStatus;
  }
  getColor() {
    return this.resaStatus === true ? "green" : "#c94930";
  }
}
