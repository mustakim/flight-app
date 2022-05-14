import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../@modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "",
  },
];
