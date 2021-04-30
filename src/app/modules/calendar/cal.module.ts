import { CommonModule } from "@angular/common";
import { CalComponent } from "./cal.component";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [CalComponent, CalendarModule],
  declarations: [CalComponent],
})
export class CalModule {}
