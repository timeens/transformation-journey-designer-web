import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  // {
  //   path: "org-canvas",
  //   title: "Organisation Canvas",
  //   icon: "corporate_fare",
  //   class: "",
  // },
  {
    path: "roadmap",
    title: "Roadmap",
    icon: "emoji_transportation",
    class: "",
  },
  {
    path: "schedule",
    title: "Schedule",
    icon: "schedule",
    class: "",
  },
  {
    path: "decision-tree",
    title: "Decision Tree",
    icon: "question_answer",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
