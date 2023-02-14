import "./TitleMagic.css";
import { Component } from "solid-js";
import { TitleMagicStar } from "./TitleMagicStar";

export const TitleMagic: Component<{
  beforeEffectTitle?: string;
  effectTitle?: string;
  afterEffectTitle?: string;
}> = ({ beforeEffectTitle, effectTitle, afterEffectTitle }) => {

  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const animateStar = (star: HTMLSpanElement) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  const triggerStarAnimation = (star: HTMLSpanElement, index: number, interval: number) => {
    setTimeout(() => {
      animateStar(star);

      setInterval(() => animateStar(star), 1000);
    }, index * (interval / 3));
  };

  return (
    <h1 class="Title">
      {beforeEffectTitle}{" "}
      <span class="Title__magic">
        <TitleMagicStar ref={(el: HTMLSpanElement) => triggerStarAnimation(el, 0, 1200)} />
        <TitleMagicStar ref={(el: HTMLSpanElement) => triggerStarAnimation(el, 1, 900)} />
        <TitleMagicStar ref={(el: HTMLSpanElement) => triggerStarAnimation(el, 2, 1000)} />
        <span class="Title__magic__text"> {effectTitle} </span>
      </span>{" "}
      {afterEffectTitle}
    </h1>
  );
};
