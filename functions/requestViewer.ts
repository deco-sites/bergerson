import type { LoaderContext, LoaderFunction } from "$live/types.ts";

export interface RequestViewer {
  request: Request;
  context: LoaderContext;
}

/**
 * @title Injects the request into loader
 * @description Returns request data
 */
const requestViewer: LoaderFunction<
  null,
  RequestViewer | null
> = (request, context) => {
  return new Promise((res) => {
    res({ data: { request, context } });
  });
};

export default requestViewer;
