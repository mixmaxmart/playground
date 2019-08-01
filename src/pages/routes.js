import React from "react";
import { Loader } from "./loader/loader";
import { Home } from "./home/home";
import { UiKit } from "./ui-kit/ui-kit";
// import { BrowserRouter as match } from "react-router-dom";

export const Routes = [
  {
    path: "/",
    title: "Home",
    exact: true,
    page: () => <Home />
  },
  {
    path: "/loader",
    title: "Loader",
    page: () => <Loader />
  },
  {
    path: "/ui",
    title: "UI kit",
    page: () => <UiKit />
  }
];
