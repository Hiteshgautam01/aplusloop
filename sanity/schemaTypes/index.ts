import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { bannerSlide } from "./bannerSlide";
import { landingPage } from "./landingPage";
import { bannerSlider } from "./bannerSlider";
import { blogPage } from "./blogPage";
import { blogBanner } from "./blogBanner";
import { featuredBlogs } from "./featuredBlogs";
import { blogPostPage } from "./blogPostPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    bannerSlide,
    landingPage,
    bannerSlider,
    blogPage,
    blogBanner,
    featuredBlogs,
    blogPostPage,
  ],
};
