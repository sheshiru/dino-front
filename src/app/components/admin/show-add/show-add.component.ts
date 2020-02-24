import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";
import { Show } from "src/app/models/show.model";

@Component({
  selector: "app-show-add",
  templateUrl: "./show-add.component.html",
  styleUrls: ["./show-add.component.scss"]
})
export class ShowAddComponent implements OnInit {
  title: string;
  duration: number;
  place;
  pictures;
  descriptions;
  price;
  dates;
  show: Show;
  constructor(private showService: ShowService) {}

  ngOnInit() {}
  addShow = evt => {
    evt.preventDefault();
    this.show = new Show(
      this.title,
      this.duration,
      this.place,
      this.pictures,
      this.descriptions,
      this.price,
      this.dates
    );
    this.showService.createShow(this.show);
    console.log("hey", this.show);
  };
}
