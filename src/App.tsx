import * as React from "react";

// Routing
import { createHashHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// Routes
import { ROUTES } from "./routes";

// Creating hash routing
const hist = createHashHistory();

const App = () => {
  let renderRoute = ROUTES.map((item, index) => (
    <Route {...item} key={index} />
  ));

  return (
    <Router history={hist}>
      <React.Suspense fallback="Loading ...">
        <Switch>{renderRoute}</Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
