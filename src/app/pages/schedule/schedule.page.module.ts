import { CalModule } from "./../../modules/calendar/cal.module";
import { SchedulePageComponent } from "./schedule.page.component";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CalModule],
  exports: [SchedulePageComponent],
  declarations: [SchedulePageComponent],
})
export class SchedulePageModule {}
