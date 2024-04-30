import Link, { LinkProps } from "next/link";

type CategoryChipProps = {
  slug: LinkProps["href"];
  label: string;
};

export default function CategoryChip({ slug, label }: CategoryChipProps) {
  return (
    <Link className="btn-link" href={`/blog/categories/${slug}`}>
      {label}
    </Link>
  );
}
