import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ShowService } from "src/app/services/show.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-resa",
  templateUrl: "./resa.component.html",
  styleUrls: ["./resa.component.scss"]
})
export class ResaComponent implements OnInit {
  show;
  nbchild: number;
  nbadult: number;
  adultPrice: number = 20;
  childPrice: number = 12;
  showMsg: boolean;
  msgError: string = "Une erreur s'est produite, veuillez réessayer";
  msgConfirm: string =
    "Votre réservation a bien été prise en compte. Vous recevrez d'ici peu un mail d'informations importantes concernant l'acces au spectacle";
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showMsg = false;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // paramMap est un observable
      let id = params.get("id"); // recupere l'id de mon url
      this.showService.getOneShow(id).subscribe(this.populateShow);
    });
  }
  //fonction callback
  populateShow = data => {
    this.show = data;
  };

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

  onSubmit = (form: NgForm) => {
    const email = form.value["email"];
    const tel = form.value["tel"];
    console.log(email, tel);
    this.showMsg = true;
    form.reset();
  };
}
