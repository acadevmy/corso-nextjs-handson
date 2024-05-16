import Image, { ImageProps } from "next/image";

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
      className="flex-1 flex items-center rounded-md gap-3 p-2 border border-zinc-500 bg-zinc-700"
    >
      <Image src={src} alt={alt} className="w-10 h-10 object-contain" />

      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs mt-2">{description}</p>
      </div>
    </a>
  );
}

export default ChannelLink;
