import { Component } from "solid-js";

export const CardItem: Component<{ index: number; total: number }> = ({
  index,
  total,
}) => {
  return <div class="CardsGroups__item__card" />;
};
