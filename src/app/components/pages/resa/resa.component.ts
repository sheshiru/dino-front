import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ReserService } from 'src/app/services/reser.service';
import { ShowService } from "src/app/services/show.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { Show } from "src/app/models/show.model";
import { Reser } from "src/app/models/Reser.model";

@Component({
  selector: "app-resa",
  templateUrl: "./resa.component.html",
  styleUrls: ["./resa.component.scss"]
})
export class ResaComponent implements OnInit {
  selected;
  show;
  user: User;
  email;
  phone;
  nbchild: number;
  nbadult: number = 1;
  adultPrice: number = 20;
  childPrice: number = 12;
  showMsg: boolean;
  msgError: string = "Une erreur s'est produite, veuillez réessayer";
  msgConfirm: string =
    "Votre réservation a bien été prise en compte. Vous recevrez d'ici peu un mail d'informations importantes concernant l'acces au spectacle";
  resaStatus: boolean;
  constructor(
    private rS: ReserService,
    private sS: ShowService,
    private uS: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showMsg = false;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // paramMap est un observable
      let id = params.get("id"); // recupere l'id de mon url
      this.sS.getOneShow(id).subscribe(this.populateShow);
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
    const phone = form.value["phone"];
    const nbadult = this.nbadult;
    const nbchild = this.nbchild;
    const idDate = this.selected._id;
    const userOb = { email: email, phone: phone };
    const resaOb = { iDdateShow: idDate, nbAdult: nbadult, nbChild: nbchild };
    this.uS.sendResa(userOb, resaOb);
    this.showMsg = true;
    form.reset();
  };
}
