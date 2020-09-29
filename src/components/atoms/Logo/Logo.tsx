import * as React from "react";

export interface LogoProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const Logo = (rest: LogoProps) => {
  return <img {...rest} />;
};

export default Logo;
