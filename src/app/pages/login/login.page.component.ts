import { Router } from "@angular/router";
import { NotifiyService } from "../../services/notify.service";
import { AuthService } from "../../auth.service";
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  templateUrl: "./login.page.component.html",
})
export class LoginPageComponent {
  constructor(
    private authSer: AuthService,
    private notifySer: NotifiyService,
    private router: Router
  ) {}

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

  async login() {
    const res = await this.authSer.login(
      this.model.username,
      this.model.password
    );
    if (res.error) return this.notifySer.error(res.error.message);

    this.notifySer.success("Login Successfull");
    this.router.navigate(["/app/dashboard"]);
  }
}
