import { Picture } from "@/components/picture";
import { getAllPictures } from "../api/contentful";


const Page = async () => {
  const pictures = await getAllPictures();

  return (
    <div>
      {pictures.map((picture) => (
        <Picture key={picture.title} picture={picture} />
      ))}
    </div>
  );
}

export default Page;