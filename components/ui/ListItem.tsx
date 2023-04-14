export interface Props {
  href: string;
  name: string;
}

function ListItem({ href, name }: Props) {
  return (
    <div class="flex justify-between items-center w-full pb-2">
      <a href={href} class="w-full inline-block">
        <span class="font-heading-1 text-menu text-default flex-grow min-h-[40px] flex items-center justify-center uppercase">
          {name}
        </span>
      </a>
    </div>
  );
}

export default ListItem;
