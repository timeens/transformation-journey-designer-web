import { Routes } from "@angular/router";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TableListComponent } from "../../pages/table-list/table-list.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { DashboardComponent } from "app/pages/dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "notifications", component: NotificationsComponent },
  {
    path: "**",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
];
