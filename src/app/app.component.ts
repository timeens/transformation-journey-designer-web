import { Router } from "@angular/router";
import { NotifiyService } from "./services/notify.service";
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
    private titleSer: Title,
    private notifySer: NotifiyService
  ) {}

  ngOnInit() {
    this.handleAuth();
    this.titleSer.setTitle("Journey Designer");
  }

  private handleAuth() {
    this.authSer.validateToken();
    this.authSer.authState.subscribe((s) => {
      if (s.loading) return;
      if (!s.loggedIn && this.router.url !== "/auth/login")
        this.router.navigate(["/auth/login"]);
    });
  }
}
