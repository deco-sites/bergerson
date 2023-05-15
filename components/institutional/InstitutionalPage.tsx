import Markdown from "deco-sites/std/components/Markdown.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import { InstituionalContainer } from "../ui/Container.tsx";
import { Head } from "$fresh/runtime.ts";
import { AccordionItem } from "./AccordionItem.tsx";

export interface Props {
  title: string;
  pageType: "ACCORDION" | "TEXT";
  menuItems: {
    label: string;
    href: string;
  }[];
  /**
   * @description Required for ACCORDION page type
   */
  accordions?: {
    label: string;
    content: HTML;
  }[];
  /**
   * @description Required for TEXT page type
   * @format html
   */
  content?: HTML;
}

function InstitutionalPage(
  { menuItems = [], pageType, content = "", accordions = [], title }: Props,
) {
  return (
    <InstituionalContainer class="mt-[30px]">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .markdown-body h2 {
              font-size: 18px;
              font-weight: 700;
              line-height: 1.4;
              margin: 0 0 20px 0;
              text-transform: uppercase;
            }
            .markdown-body h3 {
              font-size: 18px;
              font-weight: 700;
              line-height: 1.4;
              margin: 0 0 20px 0;
            }
            .markdown-body p:empty {
              display: none;
            }
            .markdown-body p {
              color: #616161;
              font-size: 16px;
              font-weight: 400;
              line-height: 20px;
            }
            .markdown-body ul {
              margin-left: 2rem;
              padding-left: 2rem;
            }
            .markdown-body li {
              list-style-type: disc;
            }

            @media screen and (min-width: 992px) {
              .markdown-body h2 {
                font-size: 20px;
              }
            }
          `,
          }}
        />
      </Head>
      <div>
        <a class="text-xs text-[#616161]" href="/">Bergerson Joias</a>
      </div>
      <div class="flex justify-between mt-[15px]">
        <aside class="md:min-w-[25%]">
          <ul class="border-1 border-[#ccc] rounded-[6px] text-[#616161]">
            {menuItems.map(
              (item, index) => (
                <li key={index} class="px-[16px] py-[13px] leading-[21px]">
                  <a
                    href={item.href}
                    class="text-[14px] font-light hover:text-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </aside>
        <article class="px-[15px] w-full">
          <h1 class="text-black text-[28px] font-medium leading-[25px] mb-[20px] text-uppercase border-b-1 border-[#ccc] pb-[10px]">
            {title}
          </h1>
          {pageType === "TEXT"
            ? <Markdown text={content.replace(/<p>|<\/p>/g, "\n")} />
            : null}
          {pageType === "ACCORDION"
            ? (
              <div>
                {accordions.map(
                  (item, index) => (
                    <AccordionItem
                      title={item.label}
                      content={item.content}
                      key={index}
                    />
                  ),
                )}
              </div>
            )
            : null}
        </article>
      </div>
    </InstituionalContainer>
  );
}

export default InstitutionalPage;
