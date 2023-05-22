import { useEffect } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

interface Props {
  rootId: string;
  scroll?: "smooth" | "auto";
  interval?: number;
  infinite?: boolean;
}

const ATTRIBUTES = {
  "data-slider": "data-slider",
  "data-slider-item": "data-slider-item",
  'data-slide="prev"': 'data-slide="prev"',
  'data-slide="next"': 'data-slide="next"',
  "data-dot": "data-dot",
};

// Percentage of the item that has to be inside the container
// for it it be considered as inside the container
const THRESHOLD = 0.6;
let timeout: number | undefined;
const intersectionX = (element: DOMRect, container: DOMRect): number => {
  const delta = container.width / 1_000;

  if (element.right < container.left - delta) {
    return 0.0;
  }

  if (element.left > container.right + delta) {
    return 0.0;
  }

  if (element.left < container.left - delta) {
    return element.right - container.left + delta;
  }

  if (element.right > container.right + delta) {
    return container.right - element.left + delta;
  }

  return element.width;
};

// as any are ok in typeguard functions
const isHTMLElement = (x: Element): x is HTMLElement =>
  // deno-lint-ignore no-explicit-any
  typeof (x as any).offsetLeft === "number";

const setup = ({ rootId, scroll, interval, infinite }: Props) => {
  const root = document.getElementById(rootId);
  const slider = root?.querySelector<HTMLUListElement>(
    `[${ATTRIBUTES["data-slider"]}]`,
  );
  let items = root?.querySelectorAll(`[${ATTRIBUTES["data-slider-item"]}]`);
  const prev = root?.querySelector(`[${ATTRIBUTES['data-slide="prev"']}]`);
  const next = root?.querySelector(`[${ATTRIBUTES['data-slide="next"']}]`);
  const dots = root?.querySelectorAll(`[${ATTRIBUTES["data-dot"]}]`);

  if (!root || !slider || !items || items.length === 0) {
    console.warn(
      "Missing necessary slider attributes. It will not work as intended. Necessary elements:",
      { root, slider, items, rootId },
    );

    return;
  }

  const getElementsInsideContainer = () => {
    const indices: number[] = [];
    const sliderRect = slider.getBoundingClientRect();
    items = root?.querySelectorAll(`[${ATTRIBUTES["data-slider-item"]}]`);

    for (let index = 0; index < items.length; index++) {
      const item = items.item(index);
      const rect = item.getBoundingClientRect();

      const ratio = intersectionX(
        rect,
        sliderRect,
      ) / rect.width;

      if (ratio > THRESHOLD) {
        indices.push(index);
      }
    }

    return indices;
  };

  const goToItem = (index: number) => {
    const item = items!.item(index);

    if (!isHTMLElement(item)) {
      console.warn(
        `Element at index ${index} is not an html element. Skipping carousel`,
      );

      return;
    }

    slider.scrollTo({
      top: 0,
      behavior: scroll,
      left: item.offsetLeft - root.offsetLeft,
    });
  };

  const onClickPrev = (clear?: boolean) => {
    if (clear) clearInterval(timeout);
    const firstItem = root.querySelector('[data-slider-item="0"]:not(.clone)');
    const rect = firstItem!.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();

    const firstItemRatio = intersectionX(
      rect,
      sliderRect,
    ) / rect.width;

    if (infinite && firstItemRatio > 0) {
      items!.forEach((item) => {
        if (item.classList.contains("clone")) {
          item.classList.remove("clone");
          firstItem!.before(item);
          return;
        }
        item.classList.add("clone");
      });
    }

    const indices = getElementsInsideContainer();
    // Wow! items per page is how many elements are being displayed inside the container!!
    const itemsPerPage = indices.length;

    const pageIndex = Math.floor(indices[indices.length - 1] / itemsPerPage);
    const isShowingFirst = indices[0] === 0;

    if (infinite) {
      return goToItem(
        (pageIndex - 1) * itemsPerPage,
      );
    }

    goToItem(
      isShowingFirst ? items!.length - 1 : (pageIndex - 1) * itemsPerPage,
    );
  };

  const onClickNext = (clear?: boolean) => {
    if (clear) clearInterval(timeout);

    const notCloneItems = root.querySelectorAll(
      "[data-slider-item]:not(.clone)",
    );
    const lastItem = notCloneItems[notCloneItems.length - 1];
    const rect = lastItem!.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();

    const lastItemRatio = intersectionX(
      rect,
      sliderRect,
    ) / rect.width;

    if (infinite && lastItemRatio > 0) {
      for (let i = 0; i < items!.length; i++) {
        const item = items![i];
        const realLast = root.querySelector(
          "[data-slider-item]:last-child",
        );

        if (item.classList.contains("clone")) {
          item.classList.remove("clone");
          realLast!.after(item);
          continue;
        }
        item.classList.add("clone");
      }
    }

    const indices = getElementsInsideContainer();
    // Wow! items per page is how many elements are being displayed inside the container!!
    const itemsPerPage = indices.length;

    const isShowingLast = indices[indices.length - 1] === items!.length - 1;
    const pageIndex = Math.floor(indices[0] / itemsPerPage);

    if (infinite) {
      return goToItem(
        (pageIndex + 1) * itemsPerPage,
      );
    }

    goToItem(isShowingLast ? 0 : (pageIndex + 1) * itemsPerPage);
  };

  const observer = new IntersectionObserver(
    (elements) =>
      elements.forEach((item) => {
        const index = Number(item.target.getAttribute("data-slider-item")) || 0;
        const dot = dots?.item(index);

        if (item.isIntersecting) {
          dot?.setAttribute("disabled", "");
        } else {
          dot?.removeAttribute("disabled");
        }

        if (!infinite) {
          if (index === 0) {
            if (item.isIntersecting) {
              prev?.setAttribute("disabled", "");
            } else {
              prev?.removeAttribute("disabled");
            }
          }
          if (index === items!.length - 1) {
            if (item.isIntersecting) {
              next?.setAttribute("disabled", "");
            } else {
              next?.removeAttribute("disabled");
            }
          }
        }
      }),
    { threshold: THRESHOLD, root: slider },
  );

  items.forEach((item) => observer.observe(item));

  for (let it = 0; it < (dots?.length ?? 0); it++) {
    dots?.item(it).addEventListener("click", () => goToItem(it));
  }

  let touchstartX = 0;
  function handleTouchStart(event: TouchEvent) {
    touchstartX = event.touches[0]?.pageX;
  }

  function handleTouchEnd(event: TouchEvent) {
    const touchendX = event.changedTouches[0]?.pageX;
    if (touchendX < touchstartX) {
      return onClickNext(true);
    }
    if (touchendX > touchstartX) {
      return onClickPrev(true);
    }
  }

  slider.addEventListener("touchstart", handleTouchStart, { passive: true });
  slider.addEventListener("touchend", handleTouchEnd, { passive: true });

  prev?.addEventListener("click", () => onClickPrev(true));
  next?.addEventListener("click", () => onClickNext(true));

  timeout = interval && setInterval(onClickNext, interval);

  // Unregister callbacks
  return () => {
    for (let it = 0; it < (dots?.length ?? 0); it++) {
      dots?.item(it).removeEventListener("click", () => goToItem(it));
    }

    prev?.removeEventListener("click", () => onClickPrev(true));
    next?.removeEventListener("click", () => onClickNext(true));

    slider.removeEventListener("touchstart", handleTouchStart);
    slider.removeEventListener("touchend", handleTouchEnd);

    observer.disconnect();

    clearInterval(timeout);
  };
};

function Slider({
  rootId,
  scroll = "smooth",
  interval,
  infinite = false,
}: Props) {
  useEffect(() => setup({ rootId, scroll, interval, infinite }), [
    rootId,
    scroll,
    interval,
    infinite,
  ]);

  return <div data-slider-controller-js />;
}

export default Slider;
