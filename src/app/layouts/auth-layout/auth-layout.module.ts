import { LoginPageModule } from "./../../pages/login/login.page.module";
import { AuthLayoutComponent } from "./auth-layout.component";
import { AuthLayoutRoutes } from "./auth-layout.routing";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    LoginPageModule,
  ],
  declarations: [AuthLayoutComponent],
})
export class AuthLayoutModule {}
