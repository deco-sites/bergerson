import { useSignal } from "@preact/signals";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  videoCover: LiveImage;
  youtubeId: string;
}

export default function Header(props: Props) {
  const isPlaying = useSignal(false);
  const playVideo = () => (isPlaying.value = true);

  return (
    <div class="bg-black w-full h-[310px] sm:h-[410px] relative flex items-center justify-center">
      <div class="aspect-w-16 aspect-h-9 w-full h-full z-30 lg:(aspect-w-16 aspect-h-9 relative top-[25%] max-w-[990px] max-h-[460px])">
        {!isPlaying.value && (
          <div
            onClick={playVideo}
            class="cursor-pointer w-full h-full object-cover absolute top-0 left-0 z-0 flex items-center justify-center"
          >
            <img
              src={props.videoCover}
              class="w-full h-full object-cover absolute top-0 left-0 z-10 object-left"
            />

            <img src="/play-video-tag-heuer.svg" class="z-20" />
          </div>
        )}

        <iframe
          class="inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${props.youtubeId}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
