import { getAllFrames } from "@/api/contentful";
import { Frame } from "@/components/frame";

const Page = async () => {
  const frames = await getAllFrames();

  return (
    <div>
      {frames.map((frame) => (
        <Frame key={frame.picture.title} {...frame} />
      ))}
    </div>
  );
}

export default Page;