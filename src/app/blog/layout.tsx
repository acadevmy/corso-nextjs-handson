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
          <CategoryChip key={item.id} label={item.label} slug={item.slug} />
        ))}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
