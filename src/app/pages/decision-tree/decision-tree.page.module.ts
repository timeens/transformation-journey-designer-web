import { DecisionTreePageComponent } from "./decision-tree.page.component";
import { NgModule } from "@angular/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [MatStepperModule, MatFormFieldModule],
  exports: [DecisionTreePageComponent],
  declarations: [DecisionTreePageComponent],
})
export class DecisionTreePageModule {}
