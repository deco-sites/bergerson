const styleContent = `
  .cookiealert {
    display: none;
    position: fixed;
    z-index: 999999;
    left: 1.7rem;
    bottom: 1.7rem;
    padding: 2rem;
    background: #f5f5f5;
    width: 290px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: left;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  }

  .cookiealert .closeAlert {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 15px;
    color: #666;
    background: #fff;
    border-radius: 50%;
    font-weight: 600;
    cursor: pointer;
  }

  .cookiealert h5 {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 1rem 0;
  }

  .cookiealert p {
    line-height: 20px;
    color: #000;
  }

  .cookiealert a {
    color: #999;
    text-decoration: underline !important;
  }

  .cookiealert .acceptcookies {
    background: #1b1b1b;
    font-size: 14px;
    color: #fff;
    border: none;
    padding: 0 20px;
    width: auto;
    height: 38px;
    line-height: 38px;
    margin-top: 1rem;
  }

  .cookiealert.show {
    display: block;
  }
`;

function CookieConsent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      <script
        async
        charSet="UTF-8"
        type="text/javascript"
        src="https://cdn.cookie-script.com/s/9a691e22311ca302830a0cf322edf008.js"
      />
      <script
        async
        type="text/javascript"
        src="/rlx-consent-v3.js"
      />
    </>
  );
}

export default CookieConsent;
