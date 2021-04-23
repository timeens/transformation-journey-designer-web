import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { AuthLayoutComponent } from "./auth-layout.component";
import { AuthLayoutRoutes } from "./auth-layout.routing";
import { LoginComponent } from "./../../pages/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    ReactiveFormsModule,
    FormlyModule,
  ],
  declarations: [AuthLayoutComponent, LoginComponent],
})
export class AuthLayoutModule {}
