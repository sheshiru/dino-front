export class Reser {
  idDateShow: string;
  nbAdults: number;
  nbChildren: number;

  constructor(id: string, na: number = 0, nc: number = 0) {
    this.idDateShow = id;
    this.nbAdults = na;
    this.nbChildren = nc;
  }
}
