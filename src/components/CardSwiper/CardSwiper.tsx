import "./CardSwiper.css";
import { Component, For } from "solid-js";
import { setDefaultCardStyles, closeCards, openCards } from "./utils/handleCardsStyles";

export const CardSwiper: Component<{}> = () => {
  const total = 6;
  const cards = Array.from({ length: total }, (_, k) => k);

  return (
    <div class="CardSwiper">
      <div class="CardGroups" data-index="0">
        <div
          class="CardGroups__items"
          onMouseEnter={({ target }) => openCards(target, total)}
          onMouseLeave={({ target }) => closeCards(target)}
        >
          <For each={cards}>
            {(_, index) => (
              <div
                class="CardsGroups__item__card"
                data-index={index()}
                ref={(target: HTMLDivElement) =>
                  setDefaultCardStyles(target, index())
                }
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
