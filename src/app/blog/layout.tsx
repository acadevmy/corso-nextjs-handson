import CategoryChip from "@/components/category-chip";

const categories = [
  {
    id: 1,
    label: "Frontend",
    slug: "frontend",
    description:
      "Ipsum magna minim officia nostrud. Ut ullamco commodo aliqua incididunt eu veniam laborum voluptate aliquip dolor. Qui occaecat officia mollit pariatur dolore tempor aute laboris sit pariatur sunt. Aute id cupidatat elit sint in ut amet id ullamco in nisi cupidatat ut proident. Ipsum consectetur quis pariatur amet.",
  },
  {
    id: 2,
    label: "Backend",
    slug: "beckend",
    decsription:
      "Officia tempor sint ullamco occaecat. Ad amet consectetur ex quis. Sit adipisicing consequat ipsum pariatur tempor. Lorem voluptate officia ipsum excepteur. Nisi excepteur eu non in nostrud eiusmod labore sit qui aliquip.",
  },
  {
    id: 3,
    label: "DevOps",
    slug: "devops",
    description:
      "Quis velit tempor labore est officia duis qui occaecat nisi sint mollit nisi Lorem. Reprehenderit sunt amet nostrud sunt magna. Reprehenderit est aliqua excepteur dolore. Adipisicing qui elit et labore reprehenderit incididunt dolor do cupidatat.",
  },
  {
    id: 4,
    label: "UX/UI",
    slug: "ux-ui",
    description:
      "Eu Lorem cillum Lorem tempor non anim esse culpa ullamco non id amet laborum fugiat. Ea laboris et adipisicing in et velit Lorem. Ipsum est elit cupidatat ea sit est tempor voluptate. Id eiusmod minim id reprehenderit ea do culpa.",
  },
];

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
