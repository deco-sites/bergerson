import type { LiveState, LoaderFunction } from "$live/types.ts";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

/**
 * @title Injects the TagHeuerConfig into loader
 * @description Returns request data
 */
const tagHeuerConfig: LoaderFunction<
  null,
  TagHeuerConfig | null,
  LiveState<{ TagHeuer?: TagHeuerConfig }>
> = (_, ctx) => {
  return new Promise((res) => {
    res({ data: ctx.state.global.TagHeuer ?? null });
  });
};

export default tagHeuerConfig;
