import WorkCard from "@/components/work-card";
import { works } from "@/lib/data";

export default function WorksPage() {
  return (
    <div>
      <h1 className="mb-10">Works 💻</h1>

      <div className="">
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
              endDate={item.endData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
