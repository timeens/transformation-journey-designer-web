import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authSer: AuthService, private router: Router) {}

  ngOnInit() {
    this.authSer.authState.subscribe((s) => {
      if (!s.isLoggedIn) this.router.navigate(["/auth/login"]);
    });
  }
}
