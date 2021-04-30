import { RoadmapModule } from "./../../modules/roadmap/roadmap.module";
import { RoadmapPageComponent } from "./roadmap.page.component";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [RoadmapModule],
  exports: [RoadmapPageComponent],
  declarations: [RoadmapPageComponent],
})
export class RoadmapPageModule {}
