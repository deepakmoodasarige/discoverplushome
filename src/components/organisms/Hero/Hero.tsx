import * as React from "react";

import CustomText from "../../atoms/CustomText/CustomText";
import Button from "../../atoms/Button/Button";
import Image from "../../atoms/Logo/Logo";

import PlayIMG from "../../../assets/images/play_icon.png";

import "./Hero.scss";

interface HeroProps {
  image: string;
  bgImg: string;
  className?: string;
  primaryText: string;
  secendoryText: string;
}

const Hero = ({
  image,
  bgImg,
  className,
  primaryText,
  secendoryText,
}: HeroProps) => {
  return (
    <div
      className={`hero-wrapper ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {image && <Image width="100%" src={image} alt="" />}
      <CustomText textLabel={primaryText} fontSize="xl" />
      <CustomText textLabel={secendoryText} fontSize="lg" color="gray" />
      <Button className="blue-hover">
        <Image width="36" alt="" src={PlayIMG} />
        <CustomText fontSize="lg" textLabel="Watch Series" />
      </Button>
    </div>
  );
};

export default Hero;
