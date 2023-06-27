import Container from "deco-sites/fashion/components/ui/Container.tsx";

export default function Form() {
  return (
    <Container class="py-20 px-5 flex flex-col gap-8 items-center justify-between md:justify-center relative">
      <section id="ancora-envie">
        <div>
          <h2>Contato</h2>
          <span>
            Por favor, indique o meio de contato de sua preferência. Nós o
            responderemos o mais rápido possível!
          </span>
        </div>
        <div>
          <form id="formcontato_">
            <div>
              <div>
                <div width="18%">
                  <select aria-label="Title" id="title" name="title">
                    <option aria-label="" value="">Título</option>
                    <option value="Sr.">Sr.</option>
                    <option value="Sra.">Sra.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Dr.">Dra.</option>
                  </select>
                  <label
                    tabIndex={-1}
                    for="title"
                  >
                    Título
                  </label>
                </div>
                <div width="25%">
                  <input
                    name="first-name"
                    aria-label="First name"
                    id="first-name"
                    autocomplete="given-name"
                    type="text"
                    value=""
                    placeholder="*Nome"
                    aria-required="true"
                    required={true}
                  />
                  <label
                    aria-hidden="true"
                    tabIndex={-1}
                    for="first-name"
                  >
                    *Nome
                  </label>
                </div>
                <div width="50%">
                  <input
                    name="last-name"
                    aria-label="Last name"
                    id="last-name"
                    autocomplete="family-name"
                    type="text"
                    value=""
                    placeholder="*Sobrenome"
                    aria-required="true"
                    required={true}
                  />
                  <label
                    aria-hidden="true"
                    tabIndex={-1}
                    for="last-name"
                  >
                    *Sobrenome
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div width="56%">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value=""
                    aria-required="true"
                    required={true}
                  />
                  <span
                    aria-hidden="true"
                    for="email"
                  >
                    *E-mail
                  </span>
                  <div>
                    Digite um e-mail válido e/ou um número de telefone
                  </div>
                </div>
                <div width="12%">e/ou</div>
                <div>
                  <div width="70%">
                    <input
                      name="telephone"
                      maxLength={15}
                      placeholder="xx xxxxx-xxxx"
                      pattern="(\([0-9]{2}\)|[0-9]{2})\s?[0-9]{4,5}-?[0-9]{4}"
                      type="tel"
                      id="telephone"
                      value=""
                    />
                    <span
                      aria-hidden="true"
                      for="telephone"
                    >
                      Telefone
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <select name="rlx-city">
                    <option value="">Cidade da boutique</option>
                    <option selected={true} value="curitiba">Curitiba</option>
                  </select>
                  <label
                    aria-hidden="true"
                    tabIndex={-1}
                    aria-label="City"
                    for="city"
                  >
                    Cidade da boutique
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <select name="rlx-city">
                    <option value="">Endereço da boutique</option>
                    <option selected={true} value="curitiba">
                      Shopping Pátio Batel 1868 Avenida do Batel Lojas 253/254
                    </option>
                  </select>
                  <label
                    aria-hidden="true"
                    tabIndex={-1}
                    aria-label="City"
                    for="city"
                  >
                    Endereço da boutique
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label for="message">
                    Sua mensagem
                  </label>
                  <textarea
                    placeholder="Escreva aqui a sua mensagem"
                    name="message"
                    id="message"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <input
                    name="terms_chk"
                    type="checkbox"
                    id="terms_chk"
                    aria-required="true"
                    required={true}
                  />
                  <span
                    for="terms_chk"
                    value="false"
                  >
                    *
                    <span>
                      Li e aceito os
                      <a
                        href="https://www.bergersonjoias.com/institucional/politicas-de-privacidade"
                        rel="noopener"
                        data-outlink="https://www.bergersonjoias.com/institucional/politicas-de-privacidade"
                        title=""
                        target="_blank"
                      >
                        Termos e Condições e a Política de Privacidade.
                      </a>
                    </span>
                  </span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="marketing_chk"
                    name="marketing_chk"
                  />
                  <span
                    for="marketing_chk"
                    value="false"
                  >
                    Aceito receber de Bergerson informações publicitárias sobre
                    a Rolex.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                </div>
                <input
                  type="submit"
                  value="Enviar"
                />
              </div>
              <span
                id="msg-form-error"
                style="color:red; display:none; text-align: center;margin-top: 20px;"
              >
                Preencha todos os campos do formulário corretamente e declare
                ter lido os termos para efetivar seu envio!
              </span>
            </div>
          </form>
        </div>
        <div style="display: none;">
          <span>OBRIGADO!</span>
          <p>
            Agradecemos o seu interesse na Rolex. Sua mensagem foi enviada com
            sucesso. Sua solicitação será analisada por um dos nossos
            representantes e respondida o mais breve possível.
          </p>
        </div>
      </section>
    </Container>
  );
}
