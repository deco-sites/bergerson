export interface Props {
  title: string;
}

export default function Collections({ title }: Props) {
  return (
    <div class="bg-red-900 w-full text-center p-2 ">
      <span class="text-white font-bold ">{title}</span>
    </div>
  );
}
