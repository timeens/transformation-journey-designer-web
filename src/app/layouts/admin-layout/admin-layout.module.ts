import { SchedulePageModule } from "./../../pages/schedule/schedule.page.module";
import { DashboardPageModule } from "./../../pages/dashboard/dashboard.page.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutRoutes } from "./admin-layout.routing";

@NgModule({
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    DashboardPageModule,
    SchedulePageModule,
  ],
})
export class AdminLayoutModule {}
