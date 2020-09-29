import * as React from "react";

import { NavLink } from "react-router-dom";

import Image from "../../atoms/Logo/Logo";
import CustomText, {
  textWeightType,
  textSizeType,
  textColorType,
} from "../../atoms/CustomText/CustomText";

import "./DPlusNavLink.scss";

export interface DPlusNavlinkProps {
  link: string;
  svg?: string;
  text: string;
  isBordered?: boolean;
  size?: textSizeType;
  color?: textColorType;
  weight?: textWeightType;
}

const DPlusNavLink = ({
  link,
  svg,
  text,
  isBordered,
  size,
  color,
}: DPlusNavlinkProps) => {
  return (
    <NavLink
      to={link}
      className={`header-link ${isBordered ? "header-link--outlined" : ""}`}
      activeClassName="header-link--active"
    >
      {svg && (
        <div className="header-link__image-container">
          <Image width="30" height="30" src={svg} alt="" />
        </div>
      )}
      <CustomText
        textLabel={text}
        fontSize={size ? size : "sm"}
        color={color ? color : "white"}
      />
    </NavLink>
  );
};

export default DPlusNavLink;
