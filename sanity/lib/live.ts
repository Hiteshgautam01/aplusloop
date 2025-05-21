// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Create a dedicated client for live updates
const liveClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for live updates
});

export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
});
