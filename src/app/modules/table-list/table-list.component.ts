import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-list",
  templateUrl: "table-list.component.html",
})
export class TableListComponent {
  @Input()
  title: string = "Title";
  @Input()
  subTitle: string = "";
  @Input()
  rows: { key: string; title: string }[] = [];
  @Input()
  data: { key: string; value: any }[] = [];

  getValueByKey(key) {
    const e = this.data.find((d) => {
      return d.key === key;
    });

    return e?.value || null;
  }
}
