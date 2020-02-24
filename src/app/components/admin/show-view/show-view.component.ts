import { Component, OnInit } from "@angular/core";
import { ShowService } from "src/app/services/show.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-show-view",
  templateUrl: "./show-view.component.html",
  styleUrls: ["./show-view.component.scss"]
})
export class ShowViewComponent implements OnInit {
  show;
  id: string;
  constructor(private sS: ShowService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.sS.getOneShow(this.id).subscribe(data => {
        this.show = data;
      });
    });
  }
}
