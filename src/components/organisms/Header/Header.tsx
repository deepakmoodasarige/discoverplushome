import * as React from "react";

import Logo from "../../molecules/Logo/Logo";
import DPlusNavLink, {
  DPlusNavlinkProps,
} from "../../molecules/DPlusNavLink/DPlusNavLink";

// css
import "./Header.scss";

const Header = () => {
  const NavigationList: DPlusNavlinkProps[] = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/Explore",
      text: "Explore"
    },
    {
      link: "/Shorts",
      text: "Shorts"
    },
    {
      link: "/Mindblown",
      text: "Mindblown"
    },
    {
      link: "/Premium",
      text: "Premium"
    }
  ];

  const SignUpList: DPlusNavlinkProps[] = [
    {
      link: "/sign-up",
      text: "Login",
      isBordered: false,
    },
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__center-links">
        {NavigationList.map((item, index) => (
          <DPlusNavLink {...item} key={index} />
        ))}
      </div>
      <div className="header__right-links">
        {SignUpList.map((item, index) => (
          <DPlusNavLink {...item} key={index} />
        ))}
      </div>
    </header>
  );
};

export default Header;
