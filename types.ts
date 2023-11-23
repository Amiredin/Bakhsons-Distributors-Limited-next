import { StaticImageData } from "next/image";

export type CarouselType = {
  title: string;
  desc: string;
  image: StaticImageData;
  btnText: string;
};

export type BeverageType = {
  image: StaticImageData;
  title: string;
};

export type ElectronicsType = {
  image: StaticImageData;
  title: string;
};

export type ConfectioneryType = {
  image: StaticImageData;
  title: string;
};
