import * as React from "react";

import "./CustomText.scss";

export type textSizeType = "xs" | "sm" | "md" | "base" | "lg" | "xl";
export type textColorType = "white" | "gray" | "lightgray";
export type textWeightType = "normal" | "bold";

export interface CustomTextProps {
  textLabel: string;
  fontSize?: textSizeType;
  color?: textColorType;
  className?: string;
  weight?: textWeightType;
  style?: {};
}

const CustomText = ({
  textLabel,
  className,
  fontSize,
  color,
  weight,
  style,
}: CustomTextProps) => {
  let textSize = `text-wrapper--text-${fontSize ? fontSize : "base"}`;
  let textColor = `text-wrapper--text-${color ? color : "white"}`;
  let textWeight = `text-wrapper--text-${weight ? weight : "normal"}`;

  return (
    <p
      style={style}
      className={`text-wrapper ${textSize} ${textColor} ${textWeight} ${className}`}
    >
      {textLabel}
    </p>
  );
};

export default CustomText;
