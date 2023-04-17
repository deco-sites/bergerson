function Footer() {
  return (
    <footer class="w-full max-w-[1260px] px-[138px] pt-10 bg-footer flex">
      {/*first div*/}
      <div class="w-full max-w-[213.5px]">
        <h3 class="text-center text-[15px] font-normal">
          Fique por dentro de todas as novidades da{" "}
          <strong>Bergerson</strong>, faça parte da nossa lista de e-mail
        </h3>
        <form class="w-full my-2.5">
          <div class="my-3.5">
            <input
              type="text"
              placeholder="Nome completo*"
              class="w-full border-b-1 border-black py-2 mb-2 bg-footer text-center text-black placeholder-black text-[11px]"
            />
            <input
              type="email"
              placeholder="E-mail*"
              class="w-full border-b-1 border-black py-2 mb-2 bg-footer text-center text-black placeholder-black text-[11px] "
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
      <div class="w-full max-w-[610px] bg-gray-700">
        <div>
          {/*Institucional*/}
          <div>
            <h3></h3>
            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          {/*Politica*/}
          <div>
            <h3></h3>
            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          {/*Ajuda*/}
          <div>
            <h3></h3>
            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
        {/*Fale conosco*/}
        <div>
          <h3></h3>
          <p></p>
        </div>
        {/*Formas de pagamento*/}
        <div>
          <h3></h3>
          <ul>
            <li>
              <img src="" />
            </li>
            <li>
              <img src="" />
            </li>
            <li>
              <img src="" />
            </li>
            <li>
              <img src="" />
            </li>
            <li>
              <img src="" />
            </li>
          </ul>
        </div>
      </div>
      {/*Last div*/}
      <div class="w-full max-w-[396.5px] bg-green-700">
        <h3></h3>
        {/*City list flex*/}
        <div>
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div>
          {/*Endereço 1*/}
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/*Endereço 2*/}
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
