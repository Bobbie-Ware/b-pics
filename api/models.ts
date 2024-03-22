
export type Picture = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

export const mapContentfulPictureToPicture = (
  contentfulPicture: any
): Picture[] => {
  return contentfulPicture.items.map((item: any) => {
    return {
      title: item.fields.title,
      description: item.fields.description,
      imageUrl: item.fields.image.fields.file.url,
      tags: item.fields.tags?.map((tag: any) => tag.fields.name),
    };
  });
}

export type Tag = {
  name: string;
};