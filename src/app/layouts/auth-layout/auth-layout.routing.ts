import { LoginComponent } from "../../pages/login/login.component";
import { Routes } from "@angular/router";

export const AuthLayoutRoutes: Routes = [
  { path: "", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full",
  },
];
