import Markdown from "deco-sites/std/components/Markdown.tsx";
import { useRef } from "preact/compat";
import { useAccordion } from "./useAccordion.tsx";
import { useSignal } from "@preact/signals";

export interface Props {
  content: string;
  title: string;
}

export function AccordionItem({ title, content }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);
  const open = useSignal(false);
  const operationClasses =
    "leading-[20px] w-[20px] text-center bg-black text-white font-bold";

  useAccordion(ref, "markdown-body", (isOpen) => {
    open.value = isOpen;
  });

  return (
    <details ref={ref}>
      <summary class="marker::hidden list-none flex justify-between items-center font-bold text-[20px] leading-[35px] mt-[20px] mb-[25px] border-b-1 border-[#ccc]">
        {title}
        {open.value
          ? <span class={operationClasses}>-</span>
          : <span class={operationClasses}>+</span>}
      </summary>
      <Markdown
        text={content.replace(/<p>|<\/p>/g, "\n")}
      />
    </details>
  );
}
