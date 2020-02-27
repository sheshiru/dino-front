import { Component } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Moments d'intelligence";


  ngOnInit() {
    $(document).ready(function () {
      $(function () {

        $(window).scroll(function () {
          if ($(this).scrollTop() < 1200) {
            $('#navbar').css({ "position": "fixed", "bottom": "0", "transition": "all 1s"});
          } else {
            $('#navbar').css({ "position": "fixed", "bottom": "5rem", "transition": "all 1s" });
          }
        });

      });
    })
  }
}




