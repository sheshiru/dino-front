import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { userUrl } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users;
  id;
  constructor(private http: HttpClient) {
    this.getUsers();
  }
  getUsers() {
    return this.http.get(userUrl.users);
  }
  createUser = user => {
    return this.http.post<User>(userUrl.users, user).subscribe();
  };
  getOneUser = id => {
    return this.http.get(`${userUrl.users}/${id}`);
  };
  editOneUser = user => {
    return this.http
      .patch<User>(`${userUrl.users}/${user._id}`, user)
      .subscribe();
  };
  deleteUser = id => {
    return this.http.delete(`${userUrl.users}/${id}`).subscribe();
  };
  sendResa = () => {
    const user = { email: "zz@ss.com", phone: "8899" };
    const resa = { iDdateShow: "123", nbAdult: "1", nbChild: "1" };
    return this.http.post<User>(userUrl.users, { user, resa });
  };
}
