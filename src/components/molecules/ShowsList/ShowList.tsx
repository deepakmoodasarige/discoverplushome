import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "../../atoms/Logo/Logo";

export interface ShowListProps{
  linkurl: string;
  Image: string;
}

const ShowList = ({
  linkurl,
  Image,
}: ShowListProps) => {
  return (
    <Link to={linkurl}>
      <Logo width="100%" src={Image} alt="" />
    </Link>
  );
};

export default ShowList;
