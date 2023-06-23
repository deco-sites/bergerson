import Container from "deco-sites/fashion/components/ui/Container.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";

export interface Props {
  mapImage: Image;
  subtitle: string;
  title: string;
  address: HTML;
  time: string;
  telText: string;
  whatsappText: string;
  mailText: string;
  directionsText: string;
}

export default function MapCard(props: Props) {
  return (
    <Container class="w-full">
      <div class="bg-[#f7f7f7] flex">
        <img class="w-1/2" src={props.mapImage} alt="Rolex" />
        <div class="w-1/2 flex flex-col">
          <span>{props.subtitle}</span>
          <span>{props.title}</span>
          <div>
            <QuillText html={props.address} />
          </div>
          <span>{props.time}</span>
          <div>
            <span>{props.telText}</span>
          </div>
          <div>
            <span>{props.whatsappText}</span>
          </div>
          <div>
            <span>{props.mailText}</span>
          </div>
          <div>
            <span>{props.directionsText}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
