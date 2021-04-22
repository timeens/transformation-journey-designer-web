import { AuthService } from "./auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authSer: AuthService) {}

  ngOnInit() {
    this.authSer.signIn("admin", "admin").subscribe((res) => {
      console.log(res);
    });
  }
}
