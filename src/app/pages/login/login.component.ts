import { AuthService } from "../../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private authSer: AuthService) {}
  ngOnInit() {
    this.authSer.authState.subscribe((authState) => {
      console.log(authState);
    });
  }
}
