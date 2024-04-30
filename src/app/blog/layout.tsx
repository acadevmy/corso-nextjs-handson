import CategoryChip from "@/components/category-chip";
import { categories } from "@/lib/data";

type BlogLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function BlogLayout({ children }: BlogLayoutProps) {
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
