import { lazy } from "react";

// Pages
const Show = lazy(() => import("./pages/Show/index"));
const Home = lazy(() => import("./pages/Home/index"));

interface ROUTE {
  path: string;
  exact: boolean;
  component: React.FunctionComponent;
}

export const ROUTES: ROUTE[] = [
  {
    path: "/shows/:slug",
    exact: true,
    component: Show,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];
