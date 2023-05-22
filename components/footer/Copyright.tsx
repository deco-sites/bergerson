import Text from "deco-sites/fashion/components/ui/Text.tsx";

function Copyright() {
  return (
    <div class="w-full pb-3 bg-footer">
      <div class="flex justify-center pb-1.5">
        <ul class="flex">
          <li class="pr-2.5">
            <a href="https://vtex.com/br-pt/">
              <img
                src="https://www.bergersonjoias.com/arquivos/VTEX_LOGO_BLACK.png?v=638010963531930000"
                alt="Vtex logo"
                width={49}
                height={18}
              />
            </a>
          </li>
          <li>
            <a href="https://tdzain.com.br/">
              <img
                src="https://www.bergersonjoias.com/arquivos/TDZAIN_LOGO_BLACK.png?v=638010963531330000"
                alt="tdzain logo"
                width={70}
                height={18}
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center text-[12px]">
        <span>
          Bergerson Joias e Relógios Ltda. CNPJ: 76.535.111/0001-64. © Todos os
          direitos reservados.
        </span>
      </div>
    </div>
  );
}

export default Copyright;
