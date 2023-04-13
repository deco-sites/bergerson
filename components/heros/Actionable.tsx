import type { JSX } from "preact";
import { Action } from "./types.ts";

export default function Actionable(
  props: { action?: Action; children: JSX.Element },
): JSX.Element {
  if (!props.action) {
    return props.children;
  }

  return (
    <a href={props.action.href} title={props.action.title}>
      {props.children}
    </a>
  );
}
