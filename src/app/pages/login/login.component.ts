import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "username",
      type: "input",
      templateOptions: {
        label: "Username",
        placeholder: "Username",
        required: true,
      },
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        type: "password",
        label: "Password",
        placeholder: "Password",
        required: true,
      },
    },
  ];

  constructor(private authSer: AuthService, private router: Router) {}

  ngOnInit() {
    this.authSer.authState.subscribe((s) => {
      if (s.isLoggedIn) this.router.navigate(["/app"]);
    });
  }

  login() {
    this.authSer.login(this.model.username, this.model.password);
  }
}
