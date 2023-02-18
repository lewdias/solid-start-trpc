import "./CardSwiper.css";
import { Component, createSignal, Index, onCleanup, onMount } from "solid-js";
import {
  setDefaultCardStyles,
  closeCards,
  openCards,
  getCardsTransformValues,
  setDefaultOpenCardStyles,
  setSelectedCardStyle,
} from "./utils/handleCardsStyles";

export const CardSwiper: Component<{}> = () => {
  const [getSelectedCard, setSelectedCard] = createSignal<number | undefined>();
  const total = 6;
  const cards = Array.from({ length: total }, (_, k) => k);
  const transformValues = getCardsTransformValues(total);
  let cardsRef: HTMLDivElement[] = [];

  const handleClickOutside = (event: any) => {
    const selectedCard = getSelectedCard();

    if (selectedCard !== undefined) {
      const openCard = cardsRef[selectedCard];

      if (!openCard.contains(event.target)) {
        setDefaultOpenCardStyles(openCard, selectedCard, transformValues);
        setSelectedCard();
      }
    }
  };

  onMount(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  onCleanup(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  });

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
    const isOpenedCard = index === selectedCard;

    if (isOpenedCard) {
      setDefaultOpenCardStyles(card, index, transformValues);
      setSelectedCard();
    }

    if (!isOpenedCard) {
      setSelectedCardStyle(card);
      setSelectedCard(index);
      return;
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
          <Index each={cards}>
            {(_, index) => (
              <div
                class="CardsGroups__item__card"
                onClick={({ target }) => handleCardClick(target, index)}
                data-index={index}
                ref={(el: HTMLDivElement) => {
                  cardsRef[index] = el;
                  setDefaultCardStyles(el, index);
                }}
              />
            )}
          </Index>
        </div>
      </div>
    </div>
  );
};
