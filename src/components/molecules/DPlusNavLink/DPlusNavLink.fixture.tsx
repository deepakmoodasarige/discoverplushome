import * as React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import DPlusNavLink from "./DPlusNavLink";

import HomeSVG from "../../../assets/svg/home.svg";

import "../../../bootstrap.scss";

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <DPlusNavLink link="/" text="Home" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <DPlusNavLink link="/random" text="Random" svg={HomeSVG} />
      </div>
      <div style={{ padding: 20 }}>
        <DPlusNavLink link="/sign-in" text="Already a member?" />
      </div>
      <div style={{ padding: 20 }}>
        <DPlusNavLink link="/sign-up" text="Sign up" isBordered />
      </div>
    </BrowserRouter>
  );
};


