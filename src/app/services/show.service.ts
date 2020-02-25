import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { showUrl } from "src/environments/environment";
import { Show } from "../models/show.model";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  shows;
  meetUpDate: any;
  constructor(private http: HttpClient) {
    this.getShows;
  }
  getShows() {
    return this.http.get(showUrl.shows);
  }
  getOneShow(id) {
    return this.http.get(`${showUrl.shows}/${id}`);
  };
  createShow(show) {
    return this.http.post<Show>(showUrl.shows, show).subscribe();
  }
  updateShow(show) {
    return this.http.patch<Show>(showUrl.shows + "/" + show._id, show).subscribe();
  }
  addDate(show, ndate) {
    const sdate = { date: ndate };
    return this.http.patch<Show>(showUrl.shows + "/add-date/" + show._id, sdate).subscribe();
  }
}
