export class Show {

    title: String;
    duration: Number;
    place: [String];
    pictures: [String];
    descriptions: [String];
    price: [Number];
    dates: [Date]

    constructor(ti: string, du: number, pl: [string] = [""], pi: [string] = [""], de: [string] = [""], pr: [number], da: [Date]) {
        this.title = ti;
        this.duration = du;
        this.place = pl;
        this.pictures = pi;
        this.descriptions = de;
        this.price = pr;
        this.dates = da
    }
}
