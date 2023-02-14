import { Form } from "solid-start/data/Form";
import { CardSwiper } from "~/components/CardSwiper";
import { TitleMagic } from "~/components/TitleMagic";

export default function Home() {
  return (
    <>
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
