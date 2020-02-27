import { Component, OnInit, Input } from "@angular/core";


@Component({
  selector: "app-live-show",
  templateUrl: "./live-show.component.html",
  styleUrls: ["./live-show.component.scss"]
})
export class LiveShowComponent implements OnInit {
  @Input() collapse: string;
  constructor() {}

  ngOnInit() {}
}
