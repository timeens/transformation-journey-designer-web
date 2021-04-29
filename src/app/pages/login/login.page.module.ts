import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { LoginPageComponent } from "./login.page.component";
import { NgModule } from "@angular/core";

@NgModule({
  exports: [ReactiveFormsModule, FormlyModule, LoginPageComponent],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
