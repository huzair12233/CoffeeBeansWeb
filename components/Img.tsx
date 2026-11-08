import Image from "next/image";
import { photo } from "@/lib/images";

export function Img({
  id,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}: {
  id: string; // filename in /public/images (see lib/images.ts + IMAGE_GUIDE.md)
  alt: string;
  // kept for call-site compatibility; local images need no URL sizing params
  w?: number;
  h?: number;
  q?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={photo(id)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
