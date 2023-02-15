import "./CardSwiper.css";
import { Component, createSignal, For } from "solid-js";
import {
  setDefaultCardStyles,
  closeCards,
  openCards,
  getCardsTransformValues,
  setDefaultOpenCardStyles,
  setSelectedCardStyle,
} from "./utils/handleCardsStyles";

export const CardSwiper: Component<{}> = () => {
  const [getSelectedCard, setSelectedCard] = createSignal();
  const total = 6;
  const cards = Array.from({ length: total }, (_, k) => k);
  const transformValues = getCardsTransformValues(total);

  const selectCard = (card: HTMLDivElement) => {
    setSelectedCardStyle(card);
  };

  const handleCardsMouseEnter = (target: Element) => {
    const selectedCard = getSelectedCard();
    if (!selectedCard && selectedCard !== 0) {
      openCards(target, total, transformValues);
    }
  };

  const handleCardsMouseLeave = (target: Element) => {
    const selectedCard = getSelectedCard();
    setTimeout(() => {
      if (!selectedCard && selectedCard !== 0) {
        closeCards(target);
      }
    }, 250);
  };

  const handleCardClick = (target: Element, index: number) => {
    const card = target as HTMLDivElement;
    const selectedCard = getSelectedCard();

    if (!selectedCard && index !== selectedCard) {
      selectCard(card);
      setSelectedCard(index);
      return;
    }

    if (index === selectedCard) {
      setDefaultOpenCardStyles(card, index, transformValues);
      setSelectedCard();
    }
  };

  return (
    <div class="CardSwiper">
      <div class="CardGroups" data-index="0">
        <div
          class="CardGroups__items"
          onMouseEnter={({ target }) => handleCardsMouseEnter(target)}
          onMouseLeave={({ target }) => handleCardsMouseLeave(target)}
        >
          <For each={cards}>
            {(_, index) => (
              <div
                class="CardsGroups__item__card"
                onClick={({ target }) => handleCardClick(target, index())}
                data-index={index()}
                ref={(el: HTMLDivElement) => setDefaultCardStyles(el, index())}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
