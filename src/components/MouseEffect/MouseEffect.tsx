import { Component, onCleanup, onMount } from "solid-js";
import "./MouseEffect.css";

export const MouseEffect: Component<{}> = () => {
  let mouseEffect: HTMLDivElement | undefined;

  const followMouseMovement = (event: PointerEvent) => {
    const { clientX, clientY } = event;
    mouseEffect?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 2000, fill: "forwards" }
    );
  };

  onMount(() => {
    document.body.addEventListener("pointermove", followMouseMovement);
  });

  onCleanup(() => {
    document.body.removeEventListener("pointermove", followMouseMovement);
  });

  return (
    <>
      <div class="MouseEffect" ref={mouseEffect} />
      <div class="MouseEffect__blur"/>
    </>
  );
};
