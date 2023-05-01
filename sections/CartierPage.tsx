interface Script {
  url: string;
  type: "js" | "css";
}

export interface Props {
  /** @description this script will be executed before file imports */
  scriptToRun: string;
  containerId: string;
  fileImports: Script[];
}

function renderScript(script: Script) {
  if (script.type === "css") {
    return <link rel="stylesheet" href={script.url} />;
  }

  return <script async type="text/javascript" src={script.url} />;
}

export default function CartierPage(props: Props) {
  return (
    <div
      id={props.containerId}
      class="min-h-[300px] h-full relative"
    >
      <span class="text-gray-500 absolute w-full h-full flex items-center justify-center">
        Carregando...
      </span>

      {/* scripts */}
      <script dangerouslySetInnerHTML={{ __html: props.scriptToRun }} />
      {props.fileImports.map(renderScript)}
    </div>
  );
}
