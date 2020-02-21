import { Component, OnInit } from '@angular/core';
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  constructor(private sS: ShowService) { }
  shows;
  ngOnInit() {
    this.sS.getShows().subscribe(data => this.shows = data)
  }

}
