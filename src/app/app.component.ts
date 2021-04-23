import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private authSer: AuthService,
    private router: Router,
    private titleSer: Title
  ) {}

  ngOnInit() {
    this.authSer.authState.subscribe((s) => {
      if (!s.isLoggedIn) this.router.navigate(["/auth/login"]);
    });
    this.titleSer.setTitle("Journey Designer");
  }
}
