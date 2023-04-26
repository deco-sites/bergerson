import type { NavImage } from "../header/Header.tsx";

function Logo({ img }: { img: NavImage }) {
  const logo = img.logo?.src;
  const logoAlt = img.logo?.alt;

  return (
    <>
      {logo
        ? (
          <img
            class={`w-[160px] h-[21px]`}
            src={logo}
            alt={logoAlt}
          />
        )
        : <p>Logo</p>}
    </>
  );
}

export default Logo;
