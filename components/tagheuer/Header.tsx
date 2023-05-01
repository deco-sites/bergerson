import { useSignal } from "@preact/signals";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  videoCover: LiveImage;
  youtubeId: string;
}

// deno-lint-ignore no-explicit-any
const windowMock = window as any;

const embedYoutube = (videoId: string) => `
  function onYouTubeIframeAPIReady() {
    window.TAG_HEUER_VIDEO = new YT.Player('player', {
      width: '100%',
      height: '100%',
      videoId: '${videoId}',
    });
  }
`;

export default function Header(props: Props) {
  const isPlaying = useSignal(false);

  const playVideo = () => {
    if (windowMock.TAG_HEUER_VIDEO) windowMock.TAG_HEUER_VIDEO.playVideo();
    isPlaying.value = true;
  };

  return (
    <div class="bg-black w-full h-[310px] sm:h-[410px] relative flex items-center justify-center">
      <div class="aspect-w-16 aspect-h-9 w-full h-full z-30 lg:(aspect-w-16 aspect-h-9 relative top-[25%] max-w-[990px] max-h-[460px])">
        {!isPlaying.value && (
          <div
            onClick={playVideo}
            class="cursor-pointer w-full h-full object-cover absolute top-0 left-0 z-10 flex items-center justify-center"
          >
            <img
              alt="Tag Heuer"
              src={props.videoCover}
              class="w-full h-full object-cover absolute top-0 left-0 z-10 object-left"
            />

            <img
              alt="Play"
              width={100}
              class="z-20"
              height={100}
              src="/play-video-tag-heuer.svg"
            />
          </div>
        )}

        <div class="w-full h-full relative">
          <div id="player" class="inset-0 top-0 z-0" />
        </div>

        <script
          async
          type="text/javascript"
          src="https://www.youtube.com/iframe_api"
        />

        <script
          dangerouslySetInnerHTML={{ __html: embedYoutube(props.youtubeId) }}
        />
      </div>
    </div>
  );
}
