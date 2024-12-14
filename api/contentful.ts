import { createClient } from "contentful";
import { Frame, mapContentfulFrameToFrame } from "./models";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getAllFrames = async (): Promise<Frame[]> => {
  const entries = await client.getEntries({ content_type: "frame" });
  return entries.items.map((entry) => mapContentfulFrameToFrame(entry));
};