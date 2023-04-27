import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Collection {
  name: string;
  nickname: string;
  description: HTML;
  avatar: LiveImage;
  inspiration: LiveImage;
  slug: string;
  banner: {
    desktop: LiveImage;
    mobile: LiveImage;
  };
}

export interface Props {
  collections: Collection[];
}

function ConfigSection(_: Props) {
  return (
    <div>
      "This is a global setting and not a component. Every change here will
      impact all environments, published/archived/draft"
    </div>
  );
}

export default ConfigSection;
