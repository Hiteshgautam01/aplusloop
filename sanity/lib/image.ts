import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
let imageBuilder: any = null;

function getImageBuilder() {
  if (!imageBuilder && projectId && dataset) {
    imageBuilder = createImageUrlBuilder({
      projectId,
      dataset,
    });
  }
  return imageBuilder;
}

export const urlForImage = (source: any) => {
  if (!source?.asset?._ref) {
    return "/placeholder.png"; // fallback image
  }

  const builder = getImageBuilder();
  if (!builder) {
    return "/placeholder.png"; // fallback if no builder available
  }

  return builder.image(source).auto("format").fit("max").url();
};
