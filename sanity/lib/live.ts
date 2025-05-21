// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Create a client directly with next-sanity (not importing from client.ts)
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for live updates
});

// Using type assertion to avoid the type conflict
export const { sanityFetch, SanityLive } = defineLive({
  client: client as any,
});
