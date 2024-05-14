import { Suspense } from "react";

import MyWorks, { MyWorksSkeleton } from "@/components/my-works";

export default async function WorksPage() {
  return (
    <div>
      <h1 className="mb-10">Works 💻</h1>

      <Suspense fallback={<MyWorksSkeleton />}>
        <MyWorks />
      </Suspense>
    </div>
  );
}
