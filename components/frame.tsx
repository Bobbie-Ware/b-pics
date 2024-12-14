import { Frame as FrameModel } from '@/api/models';
import React from 'react';
import { Picture } from './picture';
import { Size } from '@/types';

const FrameThemes: Record<'Light' | 'Dark', string> = {
  Light: 'bg-white text-black',
  Dark: 'bg-black text-white',
};

const FrameSizes: Record<Size, string> = {
  'Extra Small': 'p-2',
  Small: 'p-4',
  Medium: 'p-8',
  Large: 'p-12',
  'Extra Large': 'p-16',
};

export const Frame = (frame: FrameModel) => {
  return (
    <div key={frame.picture.title} className={`${FrameThemes[frame.theme]} ${FrameSizes[frame.size]} h-screen snap-start`}>
      <Picture picture={frame.picture} size={frame.size} />
    </div >
  );
};