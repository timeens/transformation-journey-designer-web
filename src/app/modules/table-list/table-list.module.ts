import { CommonModule } from "@angular/common";
import { TableListComponent } from "app/modules/table-list/table-list.component";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule],
  exports: [TableListComponent],
  declarations: [TableListComponent],
})
export class TableListModule {}
