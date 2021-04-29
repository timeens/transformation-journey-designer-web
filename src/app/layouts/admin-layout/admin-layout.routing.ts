import { DashboardPageComponent } from "./../../pages/dashboard/dashboard.page.component";
import { Routes } from "@angular/router";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardPageComponent },
  {
    path: "**",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
];
