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
  city?: string;
  establishment?: string;
  address?: string;
  telephone?: string;
}

export interface Props {
  paymentMethod: Image[];
  column1: Column;
  column2: Column;
  column3: Column;
  address: Address[];
}

function Footer({ paymentMethod, column1, column2, column3, address }: Props) {
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
    const currentCity = currentIndex.value;

    return (
      <ul>
        <li>
          {address[currentCity].establishment}
        </li>
        <li>
          {address[currentCity].address}
        </li>
        <li>
          {address[currentCity].telephone}
        </li>
      </ul>
    );
  };

  const footerData = {
    institucional: [
      "Sobre a bergerson",
      "Fale conosco",
      "Nossas Lojas",
      "Cuidados com as Joias",
    ],
    politicas: [
      "Política de Privacidade",
      "Políticas de Garantia",
      "Políticas de Serviço",
      "Políticas de Trocas e Devoluções",
      "Políticas de Entrega",
      "Política PLD/FTP",
    ],
    ajuda: [
      "Dúvidas Frequentes",
      "Regulamento de Promoções",
    ],
  };

  return (
    <>
      {/*Desktop*/}
      <footer class="w-full px-28 pt-10 pb-8 bg-footer justify-between hidden lg:flex">
        {/*first div*/}
        <div class="w-full max-w-[213.5px]">
          <h3 class="text-center text-[15px] font-normal leading-4">
            Fique por dentro de todas as novidades da{" "}
            <strong>Bergerson</strong>, faça parte da nossa lista de e-mail
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
                <li class="pr-1.5">
                  <a href="https://blog.bergersonjoias.com/">
                    <img
                      src="https://bergersonjoias.vteximg.com.br/arquivos/v22-blog.png?v=637872801506300000"
                      alt="Bergerson blog"
                    />
                  </a>
                </li>
                <li class="pr-1.5">
                  <a href="https://www.facebook.com/bergersonjoias/">
                    <img
                      src="https://bergersonjoias.vteximg.com.br/arquivos/v22-facebook.png?v=637872801511300000"
                      alt="Bergerson facebook page"
                    />
                  </a>
                </li>
                <li class="pr-1.5">
                  <a href="https://www.instagram.com/bergersonjoias/?hl=pt-br">
                    <img
                      src="https://www.bergersonjoias.com/arquivos/v22-instagram.png?v=637872801514130000"
                      alt="Bergerson blog"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://br.pinterest.com/bergersonjoiasoficial/">
                    <img
                      src="https://www.bergersonjoias.com/arquivos/v22-pinterest.png?v=637872801517400000"
                      alt="Bergerson pinterest"
                    />
                  </a>
                </li>
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
          <div class="mb-5">
            <h3 class="font-serif text-[17px] mb-2">
              Fale conosco
            </h3>
            <p class="text-[#333] leading-5">
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
                    <img src={item.src} alt={item.alt} />
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
          <div class="w-[396.5px] mb-2.5">
            <ul class="flex">
              {address.map((item, index) => (
                <>
                  <button class="focus:outline-none focus:border-b-2 border-black">
                    <li
                      class="pr-1 pb-1 cursor-pointer border-black"
                      onClick={(e) => getCurrentAddress(e, index)}
                    >
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
      </footer>

      {/*Mobile*/}
      <footer class="lg:w-full lg:h-64 lg:bg-badge lg:hidden">
        {/*Contact*/}
        <div class="bg-[#272727] py-[30px] px-[20px] flex flex-col items-center">
          <h3 class="max-w-[250px] text-center text-[18px] text-white font-normal leading-[1.1]">
            Fique por dentro de todas as novidades da
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
                <li>
                  <a href="https://blog.bergersonjoias.com/">
                    <img
                      style="filter: invert()"
                      src="https://bergersonjoias.vteximg.com.br/arquivos/v22-blog.png?v=637872801506300000"
                      alt="Bergerson blog"
                    />
                  </a>
                </li>
                <li class="ml-2.5">
                  <a href="https://www.facebook.com/bergersonjoias/">
                    <img
                      style="filter: invert()"
                      src="https://bergersonjoias.vteximg.com.br/arquivos/v22-facebook.png?v=637872801511300000"
                      alt="Bergerson facebook page"
                    />
                  </a>
                </li>
                <li class="ml-2.5">
                  <a href="https://www.instagram.com/bergersonjoias/?hl=pt-br">
                    <img
                      style="filter: invert()"
                      src="https://www.bergersonjoias.com/arquivos/v22-instagram.png?v=637872801514130000"
                      alt="Bergerson blog"
                    />
                  </a>
                </li>
                <li class="ml-2.5">
                  <a href="https://br.pinterest.com/bergersonjoiasoficial/">
                    <img
                      style="filter: invert()"
                      src="https://www.bergersonjoias.com/arquivos/v22-pinterest.png?v=637872801517400000"
                      alt="Bergerson pinterest"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Drop down*/}
        <FooterContainer class="text-[#4b4b4b]">
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
                      <img src={item.src} alt={item.alt} />
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
