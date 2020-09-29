import * as React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ShowList from "./ShowList";

//import PlaylistIMG from "../../../assets/images/hero/hero.jpeg";

import "../../../bootstrap.scss";

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20, width: 285 }}>
        <ShowList Image="" linkurl="/" />
      </div>
    </BrowserRouter>
  );
};


