import * as React from "react";

import HeroIMG from "../../../assets/images/hero/hero.jpeg";
import HeroTitleImage from "../../../assets/images/guys-grocery-games.png";
import Hero from "./Hero";

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <Hero
        bgImg={HeroIMG}
        image={HeroTitleImage}
        primaryText="Messaging to get the user to watch that can span 2 lines instead of a series description!"
        secendoryText="For lovers of Adventure and Nature."
      />
    </div>
  );
};


