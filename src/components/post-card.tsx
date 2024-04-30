import { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

import { formatDate } from "@/lib/utils";

import CategoryChip from "./category-chip";

type PostCardProps = {
  slug: string;
  title: string;
  publishedAt: Date;
  summary: string;
  imageSrc: ImageProps["src"];
  imageAlt?: ImageProps["alt"];
  categoryLabel?: string;
  categorySlug?: string;
};

function PostCard({
  slug,
  title,
  publishedAt,
  summary,
  imageSrc,
  imageAlt,
  categoryLabel,
  categorySlug,
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

      {categoryLabel && categorySlug && (
        <div className="my-2">
          <CategoryChip label={categoryLabel} slug={categorySlug} />
        </div>
      )}

      <h2 className="pb-1 text-orange-500">{title}</h2>

      <p className="text-sm">{summary}</p>
    </Link>
  );
}

export default PostCard;
