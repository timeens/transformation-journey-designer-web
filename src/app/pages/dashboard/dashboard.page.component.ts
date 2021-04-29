import { Component } from "@angular/core";

@Component({
  templateUrl: "./dashboard.page.component.html",
})
export class DashboardPageComponent {
  get tableCols() {
    return [{ key: "name", title: "Name" }];
  }

  get data() {
    return [{ key: "name", value: "Super Portfolio" }];
  }
}
