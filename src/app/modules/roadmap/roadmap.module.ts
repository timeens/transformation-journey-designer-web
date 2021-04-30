import { NgxTimeSchedulerModule } from "ngx-time-scheduler";
import { RoadmapComponent } from "./roadmap.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, NgxTimeSchedulerModule],
  exports: [RoadmapComponent],
  declarations: [RoadmapComponent],
})
export class RoadmapModule {}
