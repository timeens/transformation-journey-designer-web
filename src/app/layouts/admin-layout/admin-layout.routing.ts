import { DecisionTreePageComponent } from "./../../pages/decision-tree/decision-tree.page.component";
import { SchedulePageComponent } from "./../../pages/schedule/schedule.page.component";
import { RoadmapPageComponent } from "./../../pages/roadmap/roadmap.page.component";
import { DashboardPageComponent } from "./../../pages/dashboard/dashboard.page.component";
import { Routes } from "@angular/router";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardPageComponent },
  { path: "roadmap", component: RoadmapPageComponent },
  { path: "schedule", component: SchedulePageComponent },
  { path: "decision-tree", component: DecisionTreePageComponent },
  {
    path: "**",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
];
