import "./TitleMagic.css";
import { Component } from "solid-js";
import { TitleMagicStar } from "./TitleMagicStar";

export const TitleMagic: Component<{ title?: string; effectTitle?: string }> = ({
  title,
  effectTitle,
}) => {
  let index = 0,
    interval = 1000;

  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const AnimateStar = (star: HTMLSpanElement) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  const TriggerStarAnimation = (star: HTMLSpanElement) => {
    setTimeout(() => {
      AnimateStar(star);

      setInterval(() => AnimateStar(star), 1000);
    }, index++ * (interval / 3));
  };

  return (
    <h1 class="Title">
      Testing stuff{" "}
      <span class="Title__magic">
        <TitleMagicStar ref={(el) => TriggerStarAnimation(el)} />
        <TitleMagicStar ref={(el) => TriggerStarAnimation(el)} />
        <TitleMagicStar ref={(el) => TriggerStarAnimation(el)} />
        <TitleMagicStar ref={(el) => TriggerStarAnimation(el)} />
        <span class="Title__magic__text"> with stars and things </span>
      </span>{" "}
      just for fun
    </h1>
  );
};
