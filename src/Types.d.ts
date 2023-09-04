import { ReactElement } from "react";

export type Video = {
  src: string;
  type: string;
  muted?: boolean;
  poster?: string;
  alt?: string;
  playsInline?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  controls?: boolean;
};

export type Image = {
  src: string;
  alt?: string;
  className?: string;
};

export type Media = { className?: string; src: string; type?: string; alt?: string; poster?: string; muted?: boolean; controls?: boolean; playsInline?: boolean; autoPlay?: boolean; loop?: boolean };

export type MenuItem = {
  id: string;
  menu: string;
  path: string;
  icon?: ReactElement;
  targetable?: number;
};

export interface Project {
  id: string;
  menu: string;
  logo: {
    src: string;
    alt: string;
  };
  title: string;
  tags: string[];
  date: string;
  work: string;
  summary: string;
  cover: Media;
  medias: Media[];
}

export interface Slider {
  id: string;
  medias: Media[];
  description?: string;
  softwares?: string[];
}

export interface MediaTile {
  id: string;
  media: Media;
  description?: string;
  softwares?: string[];
}
