import type { LoaderFunction } from "$live/types.ts";

export interface RequestViewer {
  request: Request;
}

/**
 * @title Injects the request into loader
 * @description Returns request data
 */
const requestViewer: LoaderFunction<
  null,
  RequestViewer | null,
  null
> = (request) => {
  return new Promise((res) => {
    res({ data: { request } });
  });
};

export default requestViewer;
