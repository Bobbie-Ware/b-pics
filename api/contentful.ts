import { createClient } from "contentful";
import { Picture, mapContentfulPictureToPicture } from "./models";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getAllPictures = async (): Promise<Picture[]> => {
  const entries = await client.getEntries({ content_type: "picture" });
  return mapContentfulPictureToPicture(entries);
};