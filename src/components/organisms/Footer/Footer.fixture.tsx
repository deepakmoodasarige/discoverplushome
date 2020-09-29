import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./Footer";

// css
import "../../../bootstrap.scss";

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <Footer />
      </div>
    </BrowserRouter>
  );
};


