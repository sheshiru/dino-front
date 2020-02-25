export class User {
  email: String;
  phone: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;

  constructor(
    em: string,
    ph: string,
    us: string = "",
    pa: string = "",
    fi: string = "",
    la: string = ""
  ) {
    this.email = em;
    this.phone = ph;
    this.username = us;
    this.password = pa;
    this.firstName = fi;
    this.lastName = la;
  }
}
