import { TableListModule } from "./../../modules/table-list/table-list.module";
import { DashboardPageComponent } from "./dashboard.page.component";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [TableListModule],
  declarations: [DashboardPageComponent],
  exports: [DashboardPageComponent],
})
export class DashboardPageModule {}
