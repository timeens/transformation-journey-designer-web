import { Observable } from "rxjs";
import { WpCollectionState } from "@ngx-wordpress/core";
import { Component, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-table-list",
  templateUrl: "table-list.component.html",
})
export class TableListComponent {
  @Input()
  title: string = "";
  @Input()
  subTitle: string = "";
  @Input()
  rows: { key: string; title: string }[] = [];
  @Input()
  data: {}[] = [];
  @Input()
  wpColRef$: Observable<WpCollectionState<any>> = null;

  getValueByKey(key, data) {
    let v = data[key];
    if (v?.rendered) v = v?.rendered;
    return v || null;
  }
}
