import Image, { ImageProps } from "next/image";

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

export default Badge;
