import { Component } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Moments d'intelligence";

  ngOnInit() {
    $(document).ready(function() {
      $(function() {
        $(window).scroll(function() {
          if (
            $(this).scrollTop() <
            document.body.clientHeight - window.innerHeight
          ) {
            $("#footer").css({
              height: "0",
              transition: "all 0.8s"
            });
          } else {
            $("#footer").css({
              height: "5rem",
              transition: "all 0.8s"
            });
          }
        });
      });
    });
  }
}
