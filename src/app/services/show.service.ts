import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { showUrl } from "src/environments/environment";
import { Show } from "../models/show.model";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  shows;
  constructor(private http: HttpClient) {
    this.getShows;
  }
  getShows() {
    return this.http.get(showUrl.shows);
  }
  getOneShow = id => {
    return this.http.get(`${showUrl.shows}/${id}`);
  };
}
