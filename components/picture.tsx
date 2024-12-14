"use client";

import Image from "next/image";
import { Picture as PictureModel } from "@/api/models";
import { Size } from "@/types";
import { motion } from "framer-motion";

const PictureSizes: Record<Size, { width: number, height: number }> = {
  'Extra Small': { width: 300, height: 300 },
  Small: { width: 400, height: 400 },
  Medium: { width: 500, height: 500 },
  Large: { width: 600, height: 600 },
  'Extra Large': { width: 800, height: 800 },
};

type PictureProps = {
  classname?: string;
  picture: PictureModel;
  size: Size;
};

export const Picture = ({ classname, picture, size }: PictureProps) => {
  return (
    <div key={picture.title} className="w-auto h-full flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Image src={picture.imageUrl} alt={picture.title} width={PictureSizes[size].width} height={PictureSizes[size].height} />
      </motion.div>
      <p>{picture.description}</p>
      <div>
        {picture.tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div >
  );
};