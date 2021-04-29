import { Observable } from "rxjs";
import { DataProviderService } from "./../../services/data-provider.service";
import { Component } from "@angular/core";
import { WpCollectionState } from "@ngx-wordpress/core";

@Component({
  templateUrl: "./dashboard.page.component.html",
})
export class DashboardPageComponent {
  public data: Observable<WpCollectionState<any>> = null;
  constructor(private dp: DataProviderService) {}
  ngOnInit() {
    this.data = this.dp.get("lob");
  }

  tableCols = [
    { key: "id", title: "ID" },
    { key: "date", title: "Created at" },
    { key: "title", title: "Title" },
  ];
}
