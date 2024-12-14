export type Picture = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  aperture: number;
  shutterSpeed: number;
  iso: number;
  focalLength: number;
  location: {
    lat: number;
    lon: number;
  };
};


export type Frame = {
  picture: Picture;
  size: 'Extra Small' | 'Small' | 'Medium' | 'Large' | 'Extra Large';
  theme: 'Light' | 'Dark';
};

export const mapContentfulPictureToPicture = (
  contentfulPicture: any
): Picture => {
  return {
    id: contentfulPicture.sys.id,
    title: contentfulPicture.fields.title,
    description: contentfulPicture.fields.description,
    imageUrl: 'https:' + contentfulPicture.fields.image.fields.file.url,
    tags: contentfulPicture.fields.tags,
    aperture: contentfulPicture.fields.aperture,
    shutterSpeed: contentfulPicture.fields.shutterSpeed,
    iso: contentfulPicture.fields.iso,
    focalLength: contentfulPicture.fields.focalLength,
    location: contentfulPicture.fields.location,
  }
}

export const mapContentfulFrameToFrame = (
  contentfulFrame: any
): Frame => {
  console.log(contentfulFrame);
  return {
    picture: mapContentfulPictureToPicture(contentfulFrame.fields.picture),
    size: contentfulFrame.fields.size,
    theme: contentfulFrame.fields.theme,
  }
}

export type Tag = {
  name: string;
};