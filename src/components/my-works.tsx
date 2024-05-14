import { fetchWorks } from "@/lib/data";

import WorkCard, { WorkCardSkeleton } from "./work-card";

async function MyWorks() {
  const works = await fetchWorks();
  return (
    <div>
      {works.map((item) => (
        <div
          key={item.id}
          className="after:block after:h-px after:bg-zinc-500 after:my-10"
        >
          <WorkCard
            company={item.company}
            description={item.description}
            role={item.role}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        </div>
      ))}
    </div>
  );
}

export function MyWorksSkeleton() {
  return (
    <div>
      <WorkCardSkeleton />
      <div className="h-px bg-zinc-500 my-10" />
      <WorkCardSkeleton />
      <div className="h-px bg-zinc-500 my-10" />
      <WorkCardSkeleton />
      <div className="h-px bg-zinc-500 my-10" />
    </div>
  );
}

export default MyWorks;
