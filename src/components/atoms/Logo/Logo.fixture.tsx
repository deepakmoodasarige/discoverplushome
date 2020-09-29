import * as React from "react";

import Image from "./Logo";

import LogoIMG from "../../../assets/images/discoverypluslogo.png";

import "../../../bootstrap.scss";

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <Image src={LogoIMG} alt="" />
    </div>
  );
};


