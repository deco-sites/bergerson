function WhatsApp() {
  return (
    <>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=554133238025"
          class="w-[50px] fixed bottom-2 right-2 z-40"
          aria-label="Chat on WhatsApp"
        >
          <button
            class="bg-white text-white p-2 rounded-full shadow-lg"
            aria-label="Chat on WhatsApp"
          >
            <img
              alt="WhatsApp button"
              src="https://www.bergersonjoias.com/arquivos/tdz-bj-v23-blog.png?v=638022137341030000"
            />
          </button>
        </a>
      </div>
      <div>
        <a
          href="https://blog.bergersonjoias.com/"
          class="w-[50px] fixed bottom-16 right-2 z-40"
          aria-label="Visit Blog"
        >
          <button
            class="bg-white text-white p-2 rounded-full shadow-lg"
            aria-label="Chat on WhatsApp"
          >
            <img
              alt="Blog button"
              src="https://www.bergersonjoias.com/arquivos/tdz-bj-v23-whatsapp.png?v=638022137341200000"
            />
          </button>
        </a>
      </div>
    </>
  );
}

export default WhatsApp;
