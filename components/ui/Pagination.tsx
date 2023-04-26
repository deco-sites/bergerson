import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { ProductListingPage } from "https://denopkg.com/deco-sites/std@1.0.0-rc.13/commerce/types.ts";

export default function Pagination(
  { pageInfo }: { pageInfo: ProductListingPage["pageInfo"] },
) {
  return (
    <>
      <a rel="prev" href={pageInfo.previousPage ?? "#"}>
        <Button
          disabled={!pageInfo.previousPage}
          variant="icon"
          aria-label="previous page"
        >
          <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
        </Button>
      </a>
      <Text variant="caption">
        {pageInfo.currentPage + 1}
      </Text>
      <a rel="next" href={pageInfo.nextPage ?? "#"}>
        <Button
          disabled={!pageInfo.nextPage}
          variant="icon"
          aria-label="next page"
        >
          <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
        </Button>
      </a>
    </>
  );
}
