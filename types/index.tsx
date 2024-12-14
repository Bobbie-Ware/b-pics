import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Size = "Extra Small" | "Small" | "Medium" | "Large" | "Extra Large";