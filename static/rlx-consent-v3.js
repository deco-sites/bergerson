window.addEventListener('load', function() {
  setTimeout(() => {
    var ac_cookie_def = ac_getCookie('rlx-consent-def');

    // Verifica o valor do cookie controle e sincroniza os dois cookies com o mesmo valor
    if(ac_cookie_def == "true" || ac_cookie_def == "false"){
      setTimeout(() => {
        ac_setCookie(ac_cookie_def);
      }, 1000);
    }

    // Seta os cookies como "true" ou "false"
    document.addEventListener("change", function(e){
      if (e.target && e.target.id == "cookiescript_category_performance") {
        const is_checked = e.target.checked;

        setTimeout(() => {
          ac_setCookie(is_checked);
        }, 1000);
      }
    });

    // Verifica se o botão "Guardar e Fechar" foi acionado
    document.addEventListener('click', function(e) {
      const closeIds = ['cookiescript_save', 'cookiescript_accept', 'cookiescript_reject'];

      if (e.target && closeIds.includes(e.target.id)) {
        setTimeout(() => {
          // Foi acionado, verifica se o cookie controle, foi definido como false, se sim, seta novamente!
          var ac_cookie_def = ac_getCookie('rlx-consent-def');
          if(ac_cookie_def === "false"){
            ac_setCookie(ac_cookie_def);
          }
        }, 1000);
      }
    });

    // Busca um cookie especifico
    function ac_getCookie(name) {
      let cookie = {};
      document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
      })
      
      return cookie[name];
    }

    // Seta os cookies como "True" ou "False"
    function ac_setCookie(is_rlx_checked=true) {
      document.getElementById("cookiescript_badge").style.opacity = '1';

      var dataExpiracao = new Date();
      dataExpiracao.setTime(dataExpiracao.getTime() - 1);
      document.cookie = "rlx-consent=; expires=" + dataExpiracao.toUTCString() + "; path=/";
      document.cookie = "rlx-consent="+is_rlx_checked+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";	
      document.cookie = "rlx-consent-def=; expires=" + dataExpiracao.toUTCString() + "; path=/";
      document.cookie = "rlx-consent-def="+is_rlx_checked+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      
      if (typeof _satellite != "undefined") {
        _satellite.setVar("Analyticsconsent", is_rlx_checked);
      }
    }

    if (typeof _satellite != "undefined") {
      _satellite.pageBottom();
    }
  }, 1000);
});