import Link from "next/link";

import CategoryChip from "@/components/category-chip";
import { fetchCategories } from "@/lib/data";

type BlogLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function BlogLayout({ children }: BlogLayoutProps) {
  const categories = await fetchCategories();
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-4 w-32">
        {categories.map((item) => (
          <Link
            key={item.id}
            className="btn-link"
            href={`/blog/categories/${item.slug}`}
          >
            <CategoryChip label={item.label} />
          </Link>
        ))}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
