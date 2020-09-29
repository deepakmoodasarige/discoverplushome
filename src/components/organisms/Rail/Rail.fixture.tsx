import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Rail from "./Rail";

import TlcIMG from "../../../assets/svg/tlc_small.svg";
import EpisodeIMG from "../../../assets/images/aitplane_episode.png";

// css
import "../../../bootstrap.scss";
import { ShowListProps } from "../../molecules/ShowsList/ShowList";

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <Rail
          type="episode"
          headerText="Continue Watching"
          railList={[]}
        />
      </div>
    </BrowserRouter>
  );
};


