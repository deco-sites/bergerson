import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Action {
  title: string;
  href: string;
}

export interface ImageWithAction {
  image: LiveImage;
  action?: Action;
}
