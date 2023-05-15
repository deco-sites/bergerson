import { useLayoutEffect, useState } from "preact/compat";
import type { Ref } from "preact/compat";

interface State {
  animation: Animation | null;
  isClosing: boolean;
  isExpanding: boolean;
}

export const useAccordion = (
  el: Ref<HTMLDetailsElement>,
  containerClass: string,
  onFinish?: (isOpen: boolean) => void,
) => {
  const [{ animation, isClosing, isExpanding }, setState] = useState<State>({
    animation: null,
    isClosing: false,
    isExpanding: false,
  });

  useLayoutEffect(() => {
    const summary = el?.current?.querySelector("summary");
    if (el?.current && summary) {
      summary.addEventListener("click", onClick);
    }
  }, [el?.current]);

  const onClick = (e: MouseEvent) => {
    // Stop default behaviour from the browser
    e.preventDefault();
    // Add an overflow on the <details> to avoid content overflowing
    el!.current!.style.overflow = "hidden";

    // Check if the element is being closed or is already closed
    if (isClosing || !el!.current!.open) {
      open();
      // Check if the element is being openned or is already open
    } else if (isExpanding || el!.current!.open) {
      shrink();
    }
  };

  const shrink = () => {
    // Set the element as "being closed"
    setState((prev) => ({ ...prev, isClosing: true }));

    const summary = el!.current!.querySelector("summary");
    // Store the current height of the element
    const startHeight = `${el.current!.offsetHeight}px`;
    // Calculate the height of the summary
    const endHeight = `${summary!.offsetHeight}px`;

    // If there is already an animation running
    if (animation) {
      // Cancel the current animation
      animation.cancel();
    }

    const _animation = el!.current!.animate({
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight],
    }, {
      duration: 400,
      easing: "ease-out",
    });
    _animation.onfinish = () => onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    _animation.oncancel = () =>
      setState((prev) => ({ ...prev, isClosing: false }));

    // Start a WAAPI animation
    setState((prev) => ({
      ...prev,
      animation: _animation,
    }));
  };

  const open = () => {
    // Apply a fixed height on the element
    el!.current!.style.height = `${el!.current!.offsetHeight}px`;
    // Force the [open] attribute on the details element
    el!.current!.open = true;
    // Wait for the next frame to call the expand function
    globalThis.requestAnimationFrame(() => expand());
  };

  const expand = () => {
    // Set the element as "being expanding"
    setState((prev) => ({ ...prev, isExpanding: true }));
    const summary = el!.current!.querySelector("summary");
    const content = el?.current?.querySelector<HTMLElement>(
      `.${containerClass}`,
    );

    // Get the current fixed height of the element
    const startHeight = `${el!.current!.offsetHeight}px`;
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${summary!.offsetHeight + content!.offsetHeight}px`;

    // If there is already an animation running
    if (animation) {
      // Cancel the current animation
      animation.cancel();
    }

    const _animation = el!.current!.animate({
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight],
    }, {
      duration: 400,
      easing: "ease-out",
    });
    _animation.onfinish = () => onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    _animation.oncancel = () =>
      setState((prev) => ({ ...prev, isExpanding: false }));

    // Start a WAAPI animation
    setState((prev) => ({
      ...prev,
      animation: _animation,
    }));
  };

  const onAnimationFinish = (open: boolean) => {
    // Set the open attribute based on the parameter
    el!.current!.open = open;

    setState({
      animation: null,
      isClosing: false,
      isExpanding: false,
    });
    // Remove the overflow hidden and the fixed height
    el!.current!.style.height = el!.current!.style.overflow = "";

    onFinish?.(open);
  };
};
