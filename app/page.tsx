import { Picture } from "@/components/picture";
import { getAllPictures } from "../api/contentful";


const Page = async () => {
  const pictures = await getAllPictures();

  return (
    <div>
      <h1>My Pictures</h1>
      <div>
        {pictures.map((picture) => (
          <Picture key={picture.title} picture={picture} />
        ))}
      </div>
    </div>
  );
}

export default Page;