import * as React from "react";

import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={`btn-component ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
