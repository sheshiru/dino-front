import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Show } from "src/app/models/show.model";

@Component({
  selector: 'app-show-add-date',
  templateUrl: './show-add-date.component.html',
  styleUrls: ['./show-add-date.component.scss']
})
export class ShowAddDateComponent implements OnInit {
  show;
  dates;
  arrayDates: Date[] = [];
  id: string;
  ndate;
  constructor(private sS: ShowService, private route: ActivatedRoute) {
    
 }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.sS.getOneShow(this.id).subscribe(data => {
        this.show = data;
        this.dates = this.show.dates;
        for (let d of this.dates) {
          this.arrayDates.push(d.meetUp);
        }    
        this.arrayDates.sort();       
      });
    });
  }
  submitAdd(e) { 
    this.sS.addDate(this.show, this.ndate).subscribe(data=>{
      this.show = data;
    });
  }

  submitDelete() {
    console.log("Rrrrrr")
    
  }

}
