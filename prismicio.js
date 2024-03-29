import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export const linkResolver = (doc) => {
  switch (doc.type) {
    case "webpage":
      return `/${doc.uid}`;
    case "contact-us":
      return "/meet-with-us";
    case "privacy-policy":
      return "/privacy-policy";
    case "event-page":
      return "/events";
    default:
      return null;
  }
};

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
