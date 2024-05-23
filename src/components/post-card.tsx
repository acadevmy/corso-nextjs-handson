import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import Skeleton from "react-loading-skeleton";

import { formatDate } from "@/lib/utils";

import CategoryChip from "./category-chip";

type PostCardProps = {
  slug: string;
  title: string;
  publishedAt: Date;
  summary: string;
  imageSrc?: ImageProps["src"];
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
      className="block border border-zinc-500 p-6 rounded-md"
    >
      {imageSrc && (
        <div className="relative w-full h-60 mb-10 bg-zinc-400 rounded-md overflow-hidden">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="75vw"
            className="object-cover"
          />
        </div>
      )}

      <p className="text-zinc-500 text-sm pb-1">{formatDate(publishedAt)}</p>

      {categoryLabel && categorySlug && (
        <div className="my-2">
          <CategoryChip label={categoryLabel} />
        </div>
      )}

      <h2 className="pb-1 text-orange-500">{title}</h2>

      <p className="text-sm">{summary}</p>
    </Link>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="border border-zinc-500 p-6 rounded-md">
      <Skeleton count={1} className="h-60 mb-10 rounded-md" />

      <Skeleton count={1} className="mb-2" width={120} />

      <Skeleton count={1} className="my-2" width={100} />

      <div className="mb-1">
        <Skeleton count={2} className="mb-2 h-5" />
      </div>

      <Skeleton count={4} />
    </div>
  );
}

export default PostCard;
