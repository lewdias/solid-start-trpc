import { CardSwiper } from "~/components/CardSwiper";
import { MouseEffect } from "~/components/MouseEffect";
import { TitleMagic } from "~/components/TitleMagic";

export default function Home() {
  return (
    <>
      <MouseEffect />
      <TitleMagic
        beforeEffectTitle="Testing"
        effectTitle="stars thing bright"
        afterEffectTitle="Testing"
      />
      <div>
        <CardSwiper />
      </div>
    </>
  );
}
