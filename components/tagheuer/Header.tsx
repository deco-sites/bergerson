import { useSignal } from "@preact/signals";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  videoCover: LiveImage;
  youtubeId: string;
}

// deno-lint-ignore no-explicit-any
const windowMock = window as any;

const embedYoutube = (videoId: string) => `
  window.addEventListener('load', () => {
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = "/youtube_api.js";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    window.onYouTubeIframeAPIReady = function() {
      window.TAG_HEUER_VIDEO = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: '${videoId}'
      });
    }
  })
`;

export default function Header(props: Props) {
  const isPlaying = useSignal(false);

  const playVideo = () => {
    if (windowMock.TAG_HEUER_VIDEO) windowMock.TAG_HEUER_VIDEO.playVideo();
    isPlaying.value = true;
  };

  return (
    <div class="bg-black w-full h-[310px] sm:h-[410px] relative flex items-center justify-center">
      <div class="w-full h-full z-30 lg:(relative top-[50px] max-w-[996px] max-h-[464px])">
        {!isPlaying.value && (
          <div
            onClick={playVideo}
            class="cursor-pointer w-full h-full object-cover absolute top-0 left-0 z-10 flex items-center justify-center hover:scale-105 transition-all"
          >
            <img
              alt="Tag Heuer"
              src={props.videoCover}
              width={996}
              height={464}
              class=" lg:(top-0 w-[996px] h-[464px]) object-cover absolute top-[50px] left-0 z-10"
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

        <div
          class={`${
            isPlaying.value ? "visible" : "invisible"
          } w-full h-full relative`}
        >
          <div id="player" class="inset-0 top-0 z-0" />
        </div>

        <script
          async
          dangerouslySetInnerHTML={{ __html: embedYoutube(props.youtubeId) }}
        />
      </div>
    </div>
  );
}
