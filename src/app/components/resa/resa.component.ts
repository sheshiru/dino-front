import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-resa",
  templateUrl: "./resa.component.html",
  styleUrls: ["./resa.component.scss"]
})
export class ResaComponent implements OnInit {
  nbchild: number;
  nbadult: number;
  adultPrice: number = 20;
  childPrice: number = 12;

  constructor() {}

  ngOnInit() {}
  totalPrice = () => {
    let sum: number;

    if (this.nbadult && this.nbchild) {
      sum = this.nbadult * this.adultPrice + this.nbchild * this.childPrice;
    } else if (this.nbadult) {
      sum = this.nbadult * this.adultPrice;
    } else if (this.nbchild) {
      sum = this.nbchild * this.childPrice;
    } else {
      return null;
    }
    return `${sum}€`;
  };
}
