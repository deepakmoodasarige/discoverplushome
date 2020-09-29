import * as React from "react";

import Logo from "../../molecules/Logo/Logo";
import Text from "../../atoms/CustomText/CustomText";
import DPlusNavLink, {
  DPlusNavlinkProps,
} from "../../molecules/DPlusNavLink/DPlusNavLink";
import Image from "../../atoms/Logo/Logo";

// images
import FBIMG from "../../../assets/svg/facebook.svg";

import "./Footer.scss";

export interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const list: DPlusNavlinkProps[] = [
    {
      link: "/",
      text: "FAQ",
    },
    {
      link: "/",
      text: "Private Policy",
    },
    {
      link: "/",
      text: "Terms of use",
    },
    {
      link: "/",
      text: "About",
    },
    {
      link: "/",
      text: "Privacy Policy",
    },
    {
      link: "/",
      text: "Term of Use",
    }
  ];

  return (
    <footer className={`footer ${className}`}>
      <div className="footer__head">
        {list.map((item, index) => (
          <DPlusNavLink
            color="lightgray"
            size="base"
            {...item}
            key={index}
          />
        ))}
      </div>
      
        <div>
          <Text
            textLabel="Copyright © 2020 Discovery, Inc. or its subsidiaries and affiliates. All rights reserved."
            fontSize="xs"
            color="lightgray"
          />
        </div>
       
    
    </footer>
  );
};

export default Footer;
