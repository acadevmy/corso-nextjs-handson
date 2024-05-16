import React from "react";

import { fetchLatestWorks } from "@/lib/data";

import WorkCard from "./work-card";

async function LatestWorks() {
  const data = await fetchLatestWorks();

  return (
    <div>
      <h2 className="mb-6">Gli ultimi lavori</h2>

      <div className="flex flex-col gap-10 sm:flex-row">
        {data.map((item) => (
          <WorkCard
            key={item.id}
            company={item.company}
            role={item.role}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestWorks;
