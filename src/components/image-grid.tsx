import clsx from "clsx";
import Image from "next/image";

import gridImage1 from "@/images/grid-image-1.jpeg";
import gridImage2 from "@/images/grid-image-2.jpeg";
import gridImage3 from "@/images/grid-image-3.jpeg";
import gridImage4 from "@/images/grid-image-4.jpeg";
import gridImage5 from "@/images/grid-image-5.jpeg";
import gridImage6 from "@/images/grid-image-6.jpeg";

function ImageGrid() {
  const imageClassName = "rounded-md object-cover h-80 mb-6";
  return (
    <div className="sm:columns-3 gap-2">
      <Image
        alt=""
        src={gridImage1}
        className={clsx(imageClassName, "sm:h-40 sm:mb-2")}
      />
      <Image
        alt=""
        src={gridImage2}
        className={clsx(imageClassName, "sm:h-60")}
      />
      <Image
        alt=""
        src={gridImage3}
        className={clsx(imageClassName, "sm:h-60 sm:mb-2")}
      />
      <Image
        alt=""
        src={gridImage4}
        className={clsx(imageClassName, "sm:h-40")}
      />
      <Image
        alt=""
        src={gridImage5}
        className={clsx(imageClassName, "sm:h-40 sm:mb-2")}
      />
      <Image
        alt=""
        src={gridImage6}
        className={clsx(imageClassName, "sm:h-60")}
      />
    </div>
  );
}

export default ImageGrid;
