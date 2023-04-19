import FooterLink from "../ui/FooterLink.tsx";
import Copyright from "./Copyright.tsx";
import type { ComponentChildren } from "preact";
import DropDownItem from "./DropDown.tsx";

function Footer() {
  function FooterContainer(
    { children, class: _class = "" }: {
      class?: string;
      children: ComponentChildren;
    },
  ) {
    return <div class={`py-6 px-4 lg:py-12 lg:px-0 ${_class}`}>{children}</div>;
  }

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
      <footer class="w-full px-16 pt-10 pb-8 bg-footer justify-between hidden lg:flex">
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
              <h3 class="font-serif text-[17px] mb-2.5">Institucional</h3>
              <ul>
                <FooterLink href="/" label="Sobre a Bergerson" />
                <FooterLink href="/" label="Fale Conosco" />
                <FooterLink href="/" label="Nossas Lojas" />
                <FooterLink href="/" label="Cuidados com as Joias" />
              </ul>
            </div>
            {/*Politica*/}
            <div class="w-1/3">
              <h3 class="font-serif text-[17px] mb-2.5">Políticas</h3>
              <ul>
                <FooterLink href="/" label="Política de Privacidade" />
                <FooterLink href="/" label="Políticas de Garantia" />
                <FooterLink href="/" label="Políticas de Serviço" />
                <FooterLink href="/" label="Políticas de Trocas e Devoluções" />
                <FooterLink href="/" label="Políticas de Entrega" />
                <FooterLink href="/" label="Política PLD/FTP" />
              </ul>
            </div>
            {/*Ajuda*/}
            <div class="w-1/3">
              <h3 class="font-serif text-[17px] mb-2.5">Ajuda</h3>
              <ul>
                <FooterLink href="/" label="Ajuda" />
                <FooterLink href="/" label="Formas de pagamento" />
              </ul>
            </div>
          </div>
          {/*Fale conosco*/}
          <div class="mb-5">
            <h3 class="font-serif text-[17px] mb-2">
              Fale conosco
            </h3>
            <p class="text-[15px]">
              Para entrar em contato é só ligar 0800 0414130 ou através do
              e-mail atendimento@bergerson.com. Nosso horário de atendimento é
              de segunda a sexta-feira das 08h30 às 11:30h e das 13h30 às 17h30
              (exceto feriados).
            </p>
          </div>
          {/*Formas de pagamento*/}
          <div>
            <h3 class="font-serif text-[17px] mb-2">
              Formas de pagamento
            </h3>
            <ul class="flex">
              <li class="pr-1.5">
                <a href="/">
                  <img src="https://www.bergersonjoias.com/arquivos/v22-master.png?v=637872801515700000" />
                </a>
              </li>
              <li class="pr-2.5">
                <a href="/">
                  <img src="https://www.bergersonjoias.com/arquivos/v22-visa.png?v=637872801518670000" />
                </a>
              </li>
              <li class="pr-2.5">
                <a href="/">
                  <img src="https://www.bergersonjoias.com/arquivos/v22-hipercard.png?v=637872801512730000" />
                </a>
              </li>
              <li class="pr-2.5">
                <a href="/">
                  <img src="https://www.bergersonjoias.com/arquivos/v22-elo.png?v=637872801509730000" />
                </a>
              </li>
              <li class="pr-2.5">
                <a href="/">
                  <img src="https://www.bergersonjoias.com/arquivos/v22-boleto.png?v=637872801508330000" />
                </a>
              </li>
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
              <li class="border-b-2 border-black pr-1">
                <a href="">Curitiba</a>
              </li>
              <li class="pr-1">
                <a href="">Londrina</a>
              </li>
              <li class="pr-1">
                <a href="">Maringá</a>
              </li>
              <li class="pr-1">
                <a href="">Joinville</a>
              </li>
              <li class="pr-1">
                <a href="">Porto Alegre</a>
              </li>
            </ul>
          </div>
          <div class="font-light">
            {/*Endereço 1*/}
            <div class="mb-5">
              <ul>
                <li>
                  Park Shopping Barigüi
                </li>
                <li>
                  R. Prof. Pedro Viriato P. de Souza, 600
                </li>
                <li>
                  41 3373 3231
                </li>
              </ul>
            </div>
            {/*Endereço 2*/}
            <div>
              <ul>
                <li>
                  Shopping Pátio Batel
                </li>
                <li>
                  Avenida do Batel, 1868 | Lojas 253/254
                </li>
                <li>
                  Curitiba 80420-090
                </li>
                <li>
                  Paraná
                </li>
                <li>Brasil</li>
                <li>
                  41 3023 2840
                </li>
              </ul>
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
            summary="Institucional"
            itens={footerData.institucional}
          />
          <DropDownItem
            summary="Políticas"
            itens={footerData.politicas}
          />
          <DropDownItem
            summary="Ajuda"
            itens={footerData.ajuda}
          />
          <DropDownItem
            summary="Fale conosco"
            other={
              <p>
                Para entrar em contato é só ligar 0800 0414130 ou através do
                e-mail atendimento@bergerson.com. Nosso horário de atendimento é
                de segunda a sexta-feira das 08h30 às 11:30h e das 13h30 às
                17h30 (exceto feriados).
              </p>
            }
          />
        </FooterContainer>
      </footer>
      <Copyright />
    </>
  );
}

export default Footer;
