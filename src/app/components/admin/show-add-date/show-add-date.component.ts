import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-show-add-date',
  templateUrl: './show-add-date.component.html',
  styleUrls: ['./show-add-date.component.scss']
})
export class ShowAddDateComponent implements OnInit {
  show;
  dates;
  id: string;
  ndate;
  dateId: string;
  constructor(private sS: ShowService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.sS.getOneShow(this.id).subscribe(data => {
        this.show = data;
      });
    });
  }
  submitAdd() { 
    if (this.ndate){
      this.sS.addDate(this.show, this.ndate).subscribe(data=>{
        this.show = data;
      });
    }
  }
  submitDelete(dateId) {
    this.sS.delDate(this.show, dateId).subscribe(data => {
      this.show = data;
    });
  }

}
