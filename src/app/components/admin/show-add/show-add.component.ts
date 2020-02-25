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
  active: boolean;
  duration: number;
  place: string[];
  pictures: string[];
  descriptions: string[];
  price: number[];
  dates: Date[];
  show: Show;
  constructor(private sS: ShowService) {}

  ngOnInit() {}
  addShow = evt => {
    evt.preventDefault();
    this.show = new Show(
      this.title,
      this.active,
      this.duration,
      this.place,
      this.pictures,
      this.descriptions,
      this.price,
      this.dates
    );
    this.sS.createShow(this.show);
    {
      try {
        console.log(this.show);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
