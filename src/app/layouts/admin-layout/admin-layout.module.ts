import { DecisionTreePageModule } from "./../../pages/decision-tree/decision-tree.page.module";
import { RoadmapPageModule } from "./../../pages/roadmap/roadmap.page.module";
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
    RoadmapPageModule,
    DecisionTreePageModule,
  ],
})
export class AdminLayoutModule {}
