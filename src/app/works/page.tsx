import { Metadata } from "next";
import { Suspense } from "react";

import MyWorks, { MyWorksSkeleton } from "@/components/my-works";

export const metadata: Metadata = {
  title: "I miei lavori",
  description:
    "Elit nisi mollit et mollit nisi duis mollit aliqua adipisicing.",
};

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
