import FooterLink from "../ui/FooterLink.tsx";
import Copyright from "./Copyright.tsx";

function Footer() {
  return (
    <>
      {/*Desktop*/}
      <footer class="w-full px-[138px] pt-10 pb-8 bg-footer justify-between hidden lg:flex">
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
        <div class="w-[610px]">
          <div class="w-[610px] flex justify-center">
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
        <div class="w-[396.5px] mb-2.5">
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
      <Copyright />
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
          <form class="w-[90%] my-">
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
        <div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
// import Icon, {
//   AvailableIcons,
// } from "deco-sites/fashion/components/ui/Icon.tsx";
// import Text from "deco-sites/fashion/components/ui/Text.tsx";
// import Container from "deco-sites/fashion/components/ui/Container.tsx";

// import type { ComponentChildren } from "preact";

// export type IconItem = { icon: AvailableIcons };
// export type StringItem = {
//   label: string;
//   href: string;
// };

// export type Item = StringItem | IconItem;

// export type Section = {
//   label: string;
//   children: Item[];
// };

// const isIcon = (item: Item): item is IconItem =>
//   // deno-lint-ignore no-explicit-any
//   typeof (item as any)?.icon === "string";

// function SectionItem({ item }: { item: Item }) {
//   return (
//     <Text variant="caption" tone="default-inverse">
//       {isIcon(item)
//         ? (
//           <div class="border-default border-1 py-1.5 px-2.5">
//             <Icon
//               id={item.icon}
//               width={25}
//               height={20}
//               strokeWidth={0.01}
//             />
//           </div>
//         )
//         : (
//           <a href={item.href}>
//             {item.label}
//           </a>
//         )}
//     </Text>
//   );
// }

// function FooterContainer(
//   { children, class: _class = "" }: {
//     class?: string;
//     children: ComponentChildren;
//   },
// ) {
//   return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
// }

// export interface Props {
//   sections?: Section[];
// }

// function Footer({ sections = [] }: Props) {
//   return (
//     <footer class="w-full bg-footer flex flex-col divide-y-1 divide-default">
//       <div>
//         <Container class="w-full flex flex-col divide-y-1 divide-default">
//           <FooterContainer>
//               test
//           </FooterContainer>

//           <FooterContainer>
//             {/* Desktop view */}
//             <ul class="hidden sm:flex flex-row gap-20">
//               {sections.map((section) => (
//                 <li>
//                   <div>
//                     <Text variant="heading-3" tone="default-inverse">
//                       {section.label}
//                     </Text>

//                     <ul
//                       class={`flex ${
//                         isIcon(section.children[0]) ? "flex-row" : "flex-col"
//                       } gap-2 pt-2 flex-wrap`}
//                     >
//                       {section.children.map((item) => (
//                         <li>
//                           <SectionItem item={item} />
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             {/* Mobile view */}
//             <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
//               {sections.map((section) => (
//                 <li>
//                   <Text variant="body" tone="default-inverse">
//                     <details>
//                       <summary>
//                         {section.label}
//                       </summary>

//                       <ul
//                         class={`flex ${
//                           isIcon(section.children[0]) ? "flex-row" : "flex-col"
//                         } gap-2 px-2 pt-2`}
//                       >
//                         {section.children.map((item) => (
//                           <li>
//                             <SectionItem item={item} />
//                           </li>
//                         ))}
//                       </ul>
//                     </details>
//                   </Text>
//                 </li>
//               ))}
//             </ul>
//           </FooterContainer>
//         </Container>
//       </div>

//       <div>
//         <Container class="w-full">
//           <FooterContainer class="flex justify-between w-full">
//             <Text
//               class="flex items-center gap-1"
//               variant="body"
//               tone="default-inverse"
//             >
//               Powered by{" "}
//               <a
//                 href="https://www.deco.cx"
//                 aria-label="powered by https://www.deco.cx"
//               >
//                 <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
//               </a>
//             </Text>

//             <ul class="flex items-center justify-center gap-2">
//               <li>
//                 <a
//                   href="https://www.instagram.com/deco.cx"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram logo"
//                 >
//                   <Icon
//                     class="text-default-inverse"
//                     width={32}
//                     height={32}
//                     id="Instagram"
//                     strokeWidth={1}
//                   />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://www.deco.cx/discord"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Discord logo"
//                 >
//                   <Icon
//                     class="text-default-inverse"
//                     width={32}
//                     height={32}
//                     id="Discord"
//                     strokeWidth={5}
//                   />
//                 </a>
//               </li>
//             </ul>
//           </FooterContainer>
//         </Container>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
