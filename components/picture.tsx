import Image from "next/image";
import { Picture as PictureModel } from "@/api/models";

type PictureProps = {
  classname?: string;
  picture: PictureModel;
};

export const Picture = ({ classname, picture }: PictureProps) => {
  return (
    <div key={picture.title} className="w-auto">
      <h2>{picture.title}</h2>
      <Image src={picture.imageUrl} alt={picture.title} width={3000} height={3000} />
      <p>{picture.description}</p>
      <div>
        {picture.tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div >
  );
};