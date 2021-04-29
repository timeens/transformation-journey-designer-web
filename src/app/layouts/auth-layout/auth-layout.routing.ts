import { LoginPageComponent } from "./../../pages/login/login.page.component";
import { Routes } from "@angular/router";

export const AuthLayoutRoutes: Routes = [
  { path: "", redirectTo: "login" },
  { path: "login", component: LoginPageComponent },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full",
  },
];
