// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./functions/vtexCollectionPLP.custom.ts";
import * as $1 from "./functions/requestViewer.ts";
import * as $2 from "./functions/vtexPLP.custom.ts";
import * as $3 from "./functions/vtexTagHeuerPLP.custom.ts";
import * as $4 from "./functions/tagHeuerConfig.ts";
import * as $$$$0 from "./routes/api/[...catchall].tsx";
import * as $$$$1 from "./routes/_app.tsx";
import * as $$$$$0 from "./islands/TagHeuerHeader.tsx";
import * as $$$$$1 from "./islands/WristwatchHero.tsx";
import * as $$$$$2 from "./islands/HeaderModals.tsx";
import * as $$$$$3 from "./islands/HeaderButton.tsx";
import * as $$$$$4 from "./islands/TagHeuerPLP.tsx";
import * as $$$$$5 from "./islands/Footer.tsx";
import * as $$$$$6 from "./islands/SearchControls.tsx";
import * as $$$$$7 from "./islands/SpotlightHero.tsx";
import * as $$$$$8 from "./islands/DropDown.tsx";
import * as $$$$$9 from "./islands/AddToCartButton.tsx";
import * as $$$$$10 from "./islands/TagHeuerShelf.tsx";
import * as $$$$$11 from "./islands/WishlistButton.tsx";
import * as $$$$$12 from "./islands/CollectionPLP.tsx";
import * as $$$$$13 from "./islands/HeaderSearchMenu.tsx";
import * as $$$$$14 from "./islands/ShippingSimulation.tsx";
import * as $$$$$15 from "./islands/RolexHeader.tsx";
import * as $$$$$16 from "./islands/Filters.tsx";
import * as $$$$$17 from "./islands/BannerPLP.tsx";
import * as $$$$$18 from "./islands/SendEventButton.tsx";
import * as $$$$$19 from "./islands/ViewSendEvent.tsx";
import * as $$$$$20 from "./islands/ProductImageZoom.tsx";
import * as $$$$$21 from "./islands/Header.tsx";
import * as $$$$$22 from "./islands/SmallFaderShelf.tsx";
import * as $$$$$23 from "./islands/SliderJS.tsx";
import * as $$$$$24 from "./islands/NavItens.tsx";
import * as $$$$$25 from "./islands/ProductShelf.tsx";
import * as $$$$$$$$0 from "./sections/Features.tsx";
import * as $$$$$$$$1 from "./sections/CartierPage.tsx";
import * as $$$$$$$$2 from "./sections/RolexFooter.tsx";
import * as $$$$$$$$3 from "./sections/MontblancDescription.tsx";
import * as $$$$$$$$4 from "./sections/Collections.tsx";
import * as $$$$$$$$5 from "./sections/TagHeuerHeader.tsx";
import * as $$$$$$$$6 from "./sections/DesignSystem.story.tsx";
import * as $$$$$$$$7 from "./sections/RolexInfoCard.tsx";
import * as $$$$$$$$8 from "./sections/WristwatchHero.tsx";
import * as $$$$$$$$9 from "./sections/Highlights.tsx";
import * as $$$$$$$$10 from "./sections/BannerGrid.tsx";
import * as $$$$$$$$11 from "./sections/MontblancHighlights.tsx";
import * as $$$$$$$$12 from "./sections/TagHeuerPLP.tsx";
import * as $$$$$$$$13 from "./sections/Footer.tsx";
import * as $$$$$$$$14 from "./sections/Head.tsx";
import * as $$$$$$$$15 from "./sections/MontblancShelf.tsx";
import * as $$$$$$$$16 from "./sections/WishlistGallery.tsx";
import * as $$$$$$$$17 from "./sections/SpotlightHero.tsx";
import * as $$$$$$$$18 from "./sections/TagHeuerCollectionList.tsx";
import * as $$$$$$$$19 from "./sections/TagHeuer.global.tsx";
import * as $$$$$$$$20 from "./sections/TagHeuerShelf.tsx";
import * as $$$$$$$$21 from "./sections/CollectionPLP.tsx";
import * as $$$$$$$$22 from "./sections/LinkTree.tsx";
import * as $$$$$$$$23 from "./sections/TagHeuerDescription.tsx";
import * as $$$$$$$$24 from "./sections/RolexHeader.tsx";
import * as $$$$$$$$25 from "./sections/BannerPLP.tsx";
import * as $$$$$$$$26 from "./sections/CollectionData.tsx";
import * as $$$$$$$$27 from "./sections/TagHeuerBanner.tsx";
import * as $$$$$$$$28 from "./sections/ProductDetails.tsx";
import * as $$$$$$$$29 from "./sections/MontblancCarousel.tsx";
import * as $$$$$$$$30 from "./sections/HeroLinks.tsx";
import * as $$$$$$$$31 from "./sections/CollectionLinks.tsx";
import * as $$$$$$$$32 from "./sections/FloatLinks.tsx";
import * as $$$$$$$$33 from "./sections/Header.tsx";
import * as $$$$$$$$34 from "./sections/SearchResult.tsx";
import * as $$$$$$$$35 from "./sections/CookieConsent.tsx";
import * as $$$$$$$$36 from "./sections/ProductShelf.tsx";
import * as $$$$$$$$37 from "./sections/Carousel.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i2$$$$2 from "$live/handlers/devPage.ts";
import * as i2$$$$3 from "$live/handlers/fresh.ts";
import * as i2$$$$1 from "$live/handlers/router.ts";
import * as i2$$$$0 from "$live/handlers/routesSelection.ts";
import * as i2$$$$$0 from "$live/pages/LivePage.tsx";
import * as i2$$$9 from "$live/sections/PageInclude.tsx";
import * as i1$$$1 from "$live/sections/Slot.tsx";
import * as i1$$$2 from "$live/sections/UseSlot.tsx";
import * as i2$$$$$$6 from "$live/matchers/MatchAlways.ts";
import * as i2$$$$$$0 from "$live/matchers/MatchDate.ts";
import * as i2$$$$$$5 from "$live/matchers/MatchEnvironment.ts";
import * as i2$$$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i2$$$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i2$$$$$$2 from "$live/matchers/MatchSite.ts";
import * as i2$$$$$$1 from "$live/matchers/MatchUserAgent.ts";
import * as i2$$$$$$$0 from "$live/flags/audience.ts";
import * as i2$$$$$$$1 from "$live/flags/everyone.ts";
import * as i2$0 from "deco-sites/std/functions/vtexConfig.ts";
import * as i2$1 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as i2$2 from "deco-sites/std/functions/vndaProductList.ts";
import * as i2$3 from "deco-sites/std/functions/vndaProductDetailsPage.ts";
import * as i2$4 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as i2$5 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as i2$6 from "deco-sites/std/functions/vtexNavbar.ts";
import * as i2$7 from "deco-sites/std/functions/vtexWishlist.ts";
import * as i2$8 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as i2$9 from "deco-sites/std/functions/vtexProductList.ts";
import * as i2$10 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as i2$11 from "deco-sites/std/functions/vndaProductListingPage.ts";
import * as i2$12 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as i2$13 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as i2$14 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as i2$15 from "deco-sites/std/functions/shopifyProductList.ts";
import * as i2$16 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as i2$17 from "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts";
import * as i2$$0 from "deco-sites/std/accounts/vnda.ts";
import * as i2$$1 from "deco-sites/std/accounts/yourViews.ts";
import * as i2$$2 from "deco-sites/std/accounts/vtex.ts";
import * as i2$$3 from "deco-sites/std/accounts/shopify.ts";
import * as i2$$4 from "deco-sites/std/accounts/occ.ts";
import * as i2$$$0 from "deco-sites/std/sections/configYourViews.global.tsx";
import * as i2$$$1 from "deco-sites/std/sections/SEO.tsx";
import * as i2$$$2 from "deco-sites/std/sections/SEOPLP.tsx";
import * as i2$$$3 from "deco-sites/std/sections/configOCC.global.tsx";
import * as i2$$$4 from "deco-sites/std/sections/Analytics.tsx";
import * as i2$$$5 from "deco-sites/std/sections/configShopify.global.tsx";
import * as i2$$$6 from "deco-sites/std/sections/configVNDA.global.tsx";
import * as i2$$$7 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as i2$$$8 from "deco-sites/std/sections/SEOPDP.tsx";

const manifest = {
  "functions": {
    "deco-sites/bergerson/functions/requestViewer.ts": $1,
    "deco-sites/bergerson/functions/tagHeuerConfig.ts": $4,
    "deco-sites/bergerson/functions/vtexCollectionPLP.custom.ts": $0,
    "deco-sites/bergerson/functions/vtexPLP.custom.ts": $2,
    "deco-sites/bergerson/functions/vtexTagHeuerPLP.custom.ts": $3,
    "deco-sites/std/functions/occProductDetailsPage.ts": i2$10,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": i2$16,
    "deco-sites/std/functions/shopifyProductList.ts": i2$15,
    "deco-sites/std/functions/shopifyProductListingPage.ts": i2$8,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": i2$3,
    "deco-sites/std/functions/vndaProductList.ts": i2$2,
    "deco-sites/std/functions/vndaProductListingPage.ts": i2$11,
    "deco-sites/std/functions/vtexConfig.ts": i2$0,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": i2$4,
    "deco-sites/std/functions/vtexLegacyProductList.ts": i2$14,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": i2$12,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": i2$17,
    "deco-sites/std/functions/vtexNavbar.ts": i2$6,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": i2$13,
    "deco-sites/std/functions/vtexProductList.ts": i2$9,
    "deco-sites/std/functions/vtexProductListingPage.ts": i2$1,
    "deco-sites/std/functions/vtexSuggestions.ts": i2$5,
    "deco-sites/std/functions/vtexWishlist.ts": i2$7,
  },
  "routes": {
    "./routes/_app.tsx": $$$$1,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/api/[...catchall].tsx": $$$$0,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect.ts": $live_inspect,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/live/workbench.ts": $live_workbench,
  },
  "islands": {
    "./islands/AddToCartButton.tsx": $$$$$9,
    "./islands/BannerPLP.tsx": $$$$$17,
    "./islands/CollectionPLP.tsx": $$$$$12,
    "./islands/DropDown.tsx": $$$$$8,
    "./islands/Filters.tsx": $$$$$16,
    "./islands/Footer.tsx": $$$$$5,
    "./islands/Header.tsx": $$$$$21,
    "./islands/HeaderButton.tsx": $$$$$3,
    "./islands/HeaderModals.tsx": $$$$$2,
    "./islands/HeaderSearchMenu.tsx": $$$$$13,
    "./islands/NavItens.tsx": $$$$$24,
    "./islands/ProductImageZoom.tsx": $$$$$20,
    "./islands/ProductShelf.tsx": $$$$$25,
    "./islands/RolexHeader.tsx": $$$$$15,
    "./islands/SearchControls.tsx": $$$$$6,
    "./islands/SendEventButton.tsx": $$$$$18,
    "./islands/ShippingSimulation.tsx": $$$$$14,
    "./islands/SliderJS.tsx": $$$$$23,
    "./islands/SmallFaderShelf.tsx": $$$$$22,
    "./islands/SpotlightHero.tsx": $$$$$7,
    "./islands/TagHeuerHeader.tsx": $$$$$0,
    "./islands/TagHeuerPLP.tsx": $$$$$4,
    "./islands/TagHeuerShelf.tsx": $$$$$10,
    "./islands/ViewSendEvent.tsx": $$$$$19,
    "./islands/WishlistButton.tsx": $$$$$11,
    "./islands/WristwatchHero.tsx": $$$$$1,
  },
  "sections": {
    "$live/sections/PageInclude.tsx": i2$$$9,
    "$live/sections/Slot.tsx": i1$$$1,
    "$live/sections/UseSlot.tsx": i1$$$2,
    "deco-sites/bergerson/sections/BannerGrid.tsx": $$$$$$$$10,
    "deco-sites/bergerson/sections/BannerPLP.tsx": $$$$$$$$25,
    "deco-sites/bergerson/sections/Carousel.tsx": $$$$$$$$37,
    "deco-sites/bergerson/sections/CartierPage.tsx": $$$$$$$$1,
    "deco-sites/bergerson/sections/CollectionData.tsx": $$$$$$$$26,
    "deco-sites/bergerson/sections/CollectionLinks.tsx": $$$$$$$$31,
    "deco-sites/bergerson/sections/CollectionPLP.tsx": $$$$$$$$21,
    "deco-sites/bergerson/sections/Collections.tsx": $$$$$$$$4,
    "deco-sites/bergerson/sections/CookieConsent.tsx": $$$$$$$$35,
    "deco-sites/bergerson/sections/DesignSystem.story.tsx": $$$$$$$$6,
    "deco-sites/bergerson/sections/Features.tsx": $$$$$$$$0,
    "deco-sites/bergerson/sections/FloatLinks.tsx": $$$$$$$$32,
    "deco-sites/bergerson/sections/Footer.tsx": $$$$$$$$13,
    "deco-sites/bergerson/sections/Head.tsx": $$$$$$$$14,
    "deco-sites/bergerson/sections/Header.tsx": $$$$$$$$33,
    "deco-sites/bergerson/sections/HeroLinks.tsx": $$$$$$$$30,
    "deco-sites/bergerson/sections/Highlights.tsx": $$$$$$$$9,
    "deco-sites/bergerson/sections/LinkTree.tsx": $$$$$$$$22,
    "deco-sites/bergerson/sections/MontblancCarousel.tsx": $$$$$$$$29,
    "deco-sites/bergerson/sections/MontblancDescription.tsx": $$$$$$$$3,
    "deco-sites/bergerson/sections/MontblancHighlights.tsx": $$$$$$$$11,
    "deco-sites/bergerson/sections/MontblancShelf.tsx": $$$$$$$$15,
    "deco-sites/bergerson/sections/ProductDetails.tsx": $$$$$$$$28,
    "deco-sites/bergerson/sections/ProductShelf.tsx": $$$$$$$$36,
    "deco-sites/bergerson/sections/RolexFooter.tsx": $$$$$$$$2,
    "deco-sites/bergerson/sections/RolexHeader.tsx": $$$$$$$$24,
    "deco-sites/bergerson/sections/RolexInfoCard.tsx": $$$$$$$$7,
    "deco-sites/bergerson/sections/SearchResult.tsx": $$$$$$$$34,
    "deco-sites/bergerson/sections/SpotlightHero.tsx": $$$$$$$$17,
    "deco-sites/bergerson/sections/TagHeuer.global.tsx": $$$$$$$$19,
    "deco-sites/bergerson/sections/TagHeuerBanner.tsx": $$$$$$$$27,
    "deco-sites/bergerson/sections/TagHeuerCollectionList.tsx": $$$$$$$$18,
    "deco-sites/bergerson/sections/TagHeuerDescription.tsx": $$$$$$$$23,
    "deco-sites/bergerson/sections/TagHeuerHeader.tsx": $$$$$$$$5,
    "deco-sites/bergerson/sections/TagHeuerPLP.tsx": $$$$$$$$12,
    "deco-sites/bergerson/sections/TagHeuerShelf.tsx": $$$$$$$$20,
    "deco-sites/bergerson/sections/WishlistGallery.tsx": $$$$$$$$16,
    "deco-sites/bergerson/sections/WristwatchHero.tsx": $$$$$$$$8,
    "deco-sites/std/sections/Analytics.tsx": i2$$$4,
    "deco-sites/std/sections/configOCC.global.tsx": i2$$$3,
    "deco-sites/std/sections/configShopify.global.tsx": i2$$$5,
    "deco-sites/std/sections/configVNDA.global.tsx": i2$$$6,
    "deco-sites/std/sections/configVTEX.global.tsx": i2$$$7,
    "deco-sites/std/sections/configYourViews.global.tsx": i2$$$0,
    "deco-sites/std/sections/SEO.tsx": i2$$$1,
    "deco-sites/std/sections/SEOPDP.tsx": i2$$$8,
    "deco-sites/std/sections/SEOPLP.tsx": i2$$$2,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i2$$$$2,
    "$live/handlers/fresh.ts": i2$$$$3,
    "$live/handlers/router.ts": i2$$$$1,
    "$live/handlers/routesSelection.ts": i2$$$$0,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i2$$$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i2$$$$$$6,
    "$live/matchers/MatchDate.ts": i2$$$$$$0,
    "$live/matchers/MatchEnvironment.ts": i2$$$$$$5,
    "$live/matchers/MatchMulti.ts": i2$$$$$$3,
    "$live/matchers/MatchRandom.ts": i2$$$$$$4,
    "$live/matchers/MatchSite.ts": i2$$$$$$2,
    "$live/matchers/MatchUserAgent.ts": i2$$$$$$1,
  },
  "flags": {
    "$live/flags/audience.ts": i2$$$$$$$0,
    "$live/flags/everyone.ts": i2$$$$$$$1,
  },
  "accounts": {
    "deco-sites/std/accounts/occ.ts": i2$$4,
    "deco-sites/std/accounts/shopify.ts": i2$$3,
    "deco-sites/std/accounts/vnda.ts": i2$$0,
    "deco-sites/std/accounts/vtex.ts": i2$$2,
    "deco-sites/std/accounts/yourViews.ts": i2$$1,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
