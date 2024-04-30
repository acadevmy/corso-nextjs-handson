import { ImageProps } from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/utils";

type PostCardProps = {
  slug: string;
  title: string;
  publishedAt: Date;
  summary: string;
  imageSrc: ImageProps["src"];
  imageAlt?: ImageProps["alt"];
};

function PostCard({
  slug,
  title,
  publishedAt,
  summary,
  imageSrc,
  imageAlt,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="border border-zinc-500 p-6 rounded-md"
    >
      <div className="relative w-full h-60 mb-10 bg-zinc-400 rounded-md">
        {/* <Image /> */}
      </div>
      <p className="text-zinc-500 text-sm pb-1">{formatDate(publishedAt)}</p>

      <h2 className="pb-1 text-orange-500">{title}</h2>

      <p className="text-sm">{summary}</p>
    </Link>
  );
}

export default PostCard;
