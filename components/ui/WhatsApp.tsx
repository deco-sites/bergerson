import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description put the country number and your fullnumber */
  whatsappNumber: number;
  whatsappImage: LiveImage;
  blogLink: string;
  blogImage: LiveImage;
}

function WhatsApp(props: Props) {
  const { whatsappNumber, whatsappImage, blogLink, blogImage } = props;
  return (
    <>
      <div>
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
          class="w-[50px] fixed bottom-2 right-2 z-40"
          aria-label="Chat on WhatsApp"
        >
          <button
            class="bg-white text-white p-2 rounded-full shadow-lg"
            aria-label="Chat on WhatsApp"
          >
            <img
              alt="WhatsApp button"
              src={whatsappImage}
            />
          </button>
        </a>
      </div>
      <div>
        <a
          href={blogLink}
          class="w-[50px] fixed bottom-16 right-2 z-40"
          aria-label="Visit Blog"
        >
          <button
            class="bg-white text-white p-2 rounded-full shadow-lg"
            aria-label="Chat on WhatsApp"
          >
            <img
              alt="Blog button"
              src={blogImage}
            />
          </button>
        </a>
      </div>
    </>
  );
}

export default WhatsApp;
