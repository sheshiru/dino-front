export class Reser {
    idShow: string;
    dateShow: Date;
    nbAdults: number;
    nbChildren: number

    constructor(id: string, da: Date, na: number = 0, nc: number = 0) {
        this.idShow = id;
        this.dateShow = da;
        this.nbAdults = na;
        this.nbChildren = nc
    }        
}
