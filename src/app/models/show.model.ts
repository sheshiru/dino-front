export class Show {
  title: String;
  duration: Number;
  active: Boolean;
  place: String[];
  pictures: String[];
  descriptions: String[];
  price: Number[];
  dates: Date[];

  constructor(
    ti: string,
    ac: boolean = true,
    du: number = 0,
    pl: string[] = [],
    pi: string[] = [],
    de: string[] = [],
    pr: number[] = [],
    da: Date[] = []
  ) {
    this.title = ti;
    this.active = ac;
    this.duration = du;
    this.place = pl;
    this.pictures = pi;
    this.descriptions = de;
    this.price = pr;
    this.dates = da;
  }
}
