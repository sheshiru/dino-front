import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from './user.service';
import { ShowService } from './show.service';

@Injectable({
  providedIn: 'root'
})
export class ReserService {

  constructor(private http: HttpClient, private uS: UserService, private sS: ShowService) { }
}

