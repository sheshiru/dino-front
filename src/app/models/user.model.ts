export class User {

    username: String;
    password: String;
    email: String;
    phone: String;
    firstName: String;
    lastName: String;

    constructor(us: string = "", pa: string, em: string, ph: string, fi: string = "", la: string = "") {
        this.username = us;
        this.password = pa;
        this.email = em;
        this.phone = ph;
        this.firstName = fi;
        this.lastName = la;
    }
}