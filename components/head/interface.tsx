import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type OGType = "website" | "article";

export interface Dimensions {
  width: number;
  height: number;
}

export interface Props {
  title: string;
  description: string;
  /**
   * @description Recommended: 1200 x 630 px (up to 5MB)
   */
  image: LiveImage;
  type: OGType;
  /**
   * @description Suggested color that browsers should use to customize the display of the page or of the surrounding user interface
   */
  themeColor: string;
}

export interface PreviewProps {
  props: Props;
  dimensions: Dimensions;
  path: string;
}

export interface PreviewItens {
  title: string;
  description: string;
  image: LiveImage;
  type: OGType;
  themeColor: string;
  width: number;
  height: number;
  path: string;
}
