import { DashboardPageModule } from "./../../pages/dashboard/dashboard.page.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AdminLayoutRoutes } from "./admin-layout.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    DashboardPageModule,
  ],
})
export class AdminLayoutModule {}
