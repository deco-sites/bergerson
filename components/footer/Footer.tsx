import FooterLink from "../ui/FooterLink.tsx";
import Copyright from "./Copyright.tsx";
import type { ComponentChildren } from "preact";
import DropDownItem from "./DropDown.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";

export interface Image {
  src: LiveImage;
  alt?: string;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface Column {
  title: string;
  footerLink: FooterLink[];
}

export interface Address {
  city: string;
  info: { establishment?: string; address?: string; telephone?: string }[];
}

export interface SocialMedia {
  link: string;
  logo: Image;
}

export interface Props {
  paymentMethod: Image[];
  column1: Column;
  column2: Column;
  column3: Column;
  address: Address[];
  socialMedias: SocialMedia[];
}

function Footer(
  { paymentMethod, column1, column2, column3, address = [], socialMedias }:
    Props,
) {
  function FooterContainer(
    { children, class: _class = "" }: {
      class?: string;
      children: ComponentChildren;
    },
  ) {
    return <div class={`py-6 px-4 lg:py-12 lg:px-0 ${_class}`}>{children}</div>;
  }

  const currentIndex = useSignal(0);

  const getCurrentAddress = (
    event: MouseEvent,
    index: number,
  ) => {
    if (event.target instanceof HTMLElement) {
      currentIndex.value = index;
    }
  };

  const setCurrentAddress = () => {
    const currentCity = address[currentIndex.value];

    return currentCity?.info?.map((city) => (
      <ul class="md:mb-[30px]">
        <li>
          {city.establishment}
        </li>
        <li>
          {city.address}
        </li>
        <li>
          {city.telephone}
        </li>
      </ul>
    ));
  };

  return (
    <>
      {/*Desktop*/}
      <footer class="w-full px-28 pt-10 pb-8 bg-footer gap-7 justify-center hidden lg:flex">
        {/*first div*/}
        <div class="w-full max-w-[205px]">
          <h3 class="text-center text-[15px] leading-[16.5px]">
            Fique por dentro de todas as novidades da{" "}
            <line class="font-black">Bergerson</line>,{"  "}
            faça parte da nossa lista de e-mail
          </h3>
          <form class="w-full my-2.5">
            <div class="my-3.5">
              <input
                type="text"
                placeholder="Nome completo*"
                class="w-full border-b-1 border-black py-2 mb-2 bg-footer text-center text-black placeholder-black text-[11px] focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-mail*"
                class="w-full border-b-1 border-black py-2 mb-2 bg-footer text-center text-black placeholder-black text-[11px] focus:outline-none"
              />
            </div>

            <button class="w-full py-2 border-y-2 border-[#e3bd39] font-bold">
              Enviar
            </button>
          </form>
          <div class="text-center">
            <span class="text-xs mb-[5px]">
              Siga-nos nas redes sociais
            </span>
            <div class="w-full">
              <ul class="flex justify-center">
                {socialMedias.map((items) => {
                  return (
                    <li class="pr-2">
                      <a href={items.link}>
                        <img src={items.logo.src} alt={items.logo.alt} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/*Center div*/}
        <div class="w-full max-w-[610px]">
          <div class="flex justify-center">
            {/*Institucional*/}
            <div class="w-1/3">
              <h3 class="font-serif text-[17px] mb-2.5">{column1.title}</h3>
              <ul>
                {column1.footerLink.map((item) => (
                  <FooterLink href={item.href} label={item.label} />
                ))}
              </ul>
            </div>
            {/*Politica*/}
            <div class="w-1/3">
              <h3 class="font-serif text-[17px] mb-2.5">{column2.title}</h3>
              <ul>
                {column2.footerLink.map((item) => (
                  <FooterLink href={item.href} label={item.label} />
                ))}
              </ul>
            </div>
            {/*Ajuda*/}
            <div class="w-1/3">
              <h3 class="font-serif text-[17px] mb-2.5">{column3.title}</h3>
              <ul>
                {column3.footerLink.map((item) => (
                  <FooterLink href={item.href} label={item.label} />
                ))}
              </ul>
            </div>
          </div>
          {/*Fale conosco*/}
          <div class="my-5">
            <h3 class="font-serif text-[17px] leading-[18.7px] mb-[10px]">
              Fale conosco
            </h3>
            <p class="text-[#333] text-[15px] leading-[22.5px] font-light">
              Para entrar em contato é só ligar 0800 0414130 ou através do
              e-mail atendimento@bergerson.com. Nosso horário de atendimento é
              de segunda a sexta-feira das 08h30 às 11:30h e das 13h30 às 17h30
              (exceto feriados).
            </p>
          </div>
          {/*Formas de pagamento*/}
          <div>
            <h3
              class="font-serif text-[17px] mb-2.5"
              style="line-height:18.7px"
            >
              Formas de pagamento
            </h3>
            <ul class="flex items-center">
              {paymentMethod.map((item) => (
                <li class="pr-2.5">
                  <a href="/">
                    <img
                      src={item.src}
                      width="auto"
                      height={28}
                      alt={item.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*Last div*/}
        <div class="w-full max-w-[396.5px] mb-2.5">
          <h3 class="font-serif text-[17px] mb-2.5">
            Nossas lojas
          </h3>
          {/*City list flex*/}
          <div class="w-[396.5px] mb-2.5 font-sans">
            <ul class="flex gap-0.5">
              {address.map((item, index) => (
                <>
                  <button
                    class={`outline-none border-b-2 ${
                      index === currentIndex.value
                        ? "border-black text-[#1b1b1b]"
                        : "border-transparent"
                    }`}
                  >
                    <li
                      class="pr-1 pb-1 cursor-pointer font-light"
                      onClick={(e) => getCurrentAddress(e, index)}
                    >
                      {item.city}
                    </li>
                  </button>
                </>
              ))}
            </ul>
          </div>
          <div class="font-light font-sans">
            <div class="mb-5">
              {setCurrentAddress()}
            </div>
          </div>
        </div>
      </footer>

      {/*Mobile*/}
      <footer class="lg:w-full lg:h-64 lg:bg-badge lg:hidden">
        {/*Contact*/}
        <div class="bg-[#272727] py-[30px] px-[20px] flex flex-col items-center">
          <h3 class="max-w-[250px] text-center text-[18px] text-white font-normal leading-[1.1]">
            Fique por dentro de todas as novidades da{" "}
            <strong>Bergerson</strong>,
          </h3>
          <h3 class="max-w-[310px] mb-2 text-center text-[18px] text-white font-normal leading-[1.1]">
            faça parte da nossa lista de e-mail
          </h3>
          <form class="w-[90%] my-4">
            <div class="my-3.5">
              <input
                type="text"
                placeholder="Nome completo*"
                class="w-full border-b-2 border-[#4b4b4b] min-h-[34px] mb-1 bg-[#272727] text-center text-white placeholder-white text-[15px] focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-mail*"
                class="w-full border-b-2 border-[#4b4b4b] py-2 mb-2 bg-[#272727] text-center text-white placeholder-white text-[15px] focus:outline-none"
              />
            </div>

            <button class="w-full py-2 border-y-2 border-[#e3bd39] text-white font-bold">
              Enviar
            </button>
          </form>
          <div class="text-center">
            <span class="text-xs text-white">
              Siga-nos nas redes sociais
            </span>
            <div class="w-full  mt-2.5">
              <ul class="flex justify-center">
                {socialMedias.map((items) => {
                  return (
                    <li class="ml-2.5">
                      <a href={items.link}>
                        <img
                          style="filter: invert()"
                          src={items.logo.src}
                          alt={items.logo.alt}
                          width={35}
                          height={35}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/*Drop down*/}
        <FooterContainer class="text-[#4b4b4b] bg-footer">
          <DropDownItem
            title={column1.title}
            itens={column1.footerLink}
          />
          <DropDownItem
            title={column2.title}
            itens={column2.footerLink}
          />
          <DropDownItem
            title={column3.title}
            itens={column3.footerLink}
          />
          <DropDownItem
            title="Fale conosco"
            other={
              <p>
                Para entrar em contato é só ligar 0800 0414130 ou através do
                e-mail atendimento@bergerson.com. Nosso horário de atendimento é
                de segunda a sexta-feira das 08h30 às 11:30h e das 13h30 às
                17h30 (exceto feriados).
              </p>
            }
          />
          <DropDownItem
            title="Formas de pagamento"
            other={
              <>
                {paymentMethod.map((item) => (
                  <li class="pr-2.5">
                    <a href="/">
                      <img
                        width="auto"
                        height={28}
                        src={item.src}
                        alt={item.alt}
                      />
                    </a>
                  </li>
                ))}
              </>
            }
          />
          <DropDownItem
            title="Nossas Lojas"
            other={
              <div class="flex flex-col">
                <div class="w-[396.5px] mb-2.5">
                  <ul class="">
                    {address.map((item, index) => (
                      <>
                        <button
                          class="focus:outline-none focus:border-b-2 border-black"
                          onClick={(e) => getCurrentAddress(e, index)}
                        >
                          <li class="pr-1 pb-1 cursor-pointer border-black">
                            {item.city}
                          </li>
                        </button>
                      </>
                    ))}
                  </ul>
                </div>
                <div class="font-light">
                  <div class="mb-5">
                    {setCurrentAddress()}
                  </div>
                </div>
              </div>
            }
          />
        </FooterContainer>
      </footer>
      <Copyright />
    </>
  );
}

export default Footer;
