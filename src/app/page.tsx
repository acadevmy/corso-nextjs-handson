import clsx from "clsx";
import Image, { ImageProps } from "next/image";

import githubLogo from "@/images/github.png";
import gridImage1 from "@/images/grid-image-1.jpeg";
import gridImage2 from "@/images/grid-image-2.jpeg";
import gridImage3 from "@/images/grid-image-3.jpeg";
import gridImage4 from "@/images/grid-image-4.jpeg";
import gridImage5 from "@/images/grid-image-5.jpeg";
import gridImage6 from "@/images/grid-image-6.jpeg";
import nextLogo from "@/images/next.svg";

export default function Home() {
  return (
    <main className="max-w-2xl m-auto p-10">
      <div className="mb-10">
        <h1 className="mb-4">Ciao, Bevenuto nel mio Porfolio 👋</h1>
        <h2 className="mb-10">
          Proident laborum nulla dolore est laboris tempor enim non irure qui.
        </h2>

        <p>
          Sint nisi dolor commodo esse id officia aute magna ad velit elit magna
          quis.
          <Badge
            src={nextLogo}
            alt="next.js logo"
            href="https://nextjs.org"
            label="Nextj.js"
          />{" "}
          Reprehenderit sunt deserunt cupidatat velit veniam. Veniam laborum
          dolor incididunt deserunt{" "}
          <Badge
            src={githubLogo}
            alt="github logo"
            href="https://github.com"
            label="Github"
          />{" "}
          aliqua fugiat in adipisicing.
        </p>
      </div>

      <div className="mb-10">
        <ImageGrid />
      </div>

      <div className="mb-10">
        <p>
          Sint laborum aute occaecat adipisicing eiusmod sint aliqua laborum.
          Mollit commodo velit officia velit excepteur pariatur commodo esse
          commodo. Exercitation in duis non ipsum. Aliqua incididunt labore esse
          elit aliquip reprehenderit officia esse anim consequat officia.
        </p>
      </div>

      <div className="mb-10 flex gap-4">
        <ChannelLink
          src={githubLogo}
          alt="github logo"
          description="Seguimi su Github"
          href="https://github.com"
          title="@myusername"
        />
        <ChannelLink
          src={githubLogo}
          alt="github logo"
          description="Seguimi su Github"
          href="https://github.com"
          title="@myusername"
        />
      </div>
    </main>
  );
}

type BadgeProps = {
  src: ImageProps["src"];
  label: string;
  alt: string;
  href: string;
};

function Badge({ src, alt, label, href }: BadgeProps) {
  return (
    <a
      href={href}
      className="bg-zinc-700 border border-zinc-500 p-0.5 text-xs inline-flex items-center gap-1"
    >
      <Image src={src} alt={alt} className="w-4 h-4 object-contain" />
      {label}
    </a>
  );
}

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

type ChannelLinkProps = {
  title: string;
  description: string;
  href: string;
  src: ImageProps["src"];
  alt: ImageProps["alt"];
};
function ChannelLink({ title, description, href, src, alt }: ChannelLinkProps) {
  return (
    <a
      href={href}
      className="flex-1 flex items-center rounded-t-md gap-3 p-2 border border-zinc-500 bg-zinc-700"
    >
      <Image src={src} alt={alt} className="w-10 h-10 object-contain" />

      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs mt-2">{description}</p>
      </div>
    </a>
  );
}
