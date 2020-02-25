import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  collapse: string;
  show;
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.collapse = "collapse";
    this.showService.getShows().subscribe(data => {
      this.show = data;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      this.showService.getOneShow(id).subscribe(data => {
        this.show = data;
        console.log(this.show);
      });
    });
  }
}
