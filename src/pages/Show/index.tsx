import * as React from "react";
import { useParams } from "react-router-dom";

interface ParamTypes {
  slug?: string;
}

const Show = () => {
  const params = useParams<ParamTypes>();

  return <div>{params?.slug}</div>;
};

export default Show;
