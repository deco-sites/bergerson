export interface Props {
  href: string;
  label: string;
}

function FooterLink({ href, label }: Props) {
  return (
    <li class="mb-[5px]">
      <a href={href} class="text-[15px] hover:border-b-1 hover:border-black">
        {label}
      </a>
    </li>
  );
}

export default FooterLink;
