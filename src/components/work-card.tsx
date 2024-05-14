import Skeleton from "react-loading-skeleton";

import { formatDate } from "@/lib/utils";

type WorkCardProps = {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
};

export default function WorkCard({
  company,
  role,
  startDate,
  endDate,
  description,
}: WorkCardProps) {
  return (
    <div>
      <h2 className="mb-2">{company}</h2>
      <h3 className="mb-2">{role}</h3>
      <p className="mb-1 text-zinc-500 text-sm">
        {formatDate(startDate)}
        {endDate ? ` - ${formatDate(endDate)}` : ""}
      </p>

      <p className="text-sm">{description}</p>
    </div>
  );
}

export function WorkCardSkeleton() {
  return (
    <div>
      <Skeleton count={1} className="mb-2" width={80} />

      <Skeleton count={1} className="mb-2" width={120} />

      <Skeleton count={1} className="mb-1" width={100} />

      <Skeleton count={2} />
      <Skeleton count={1} width="80%" />
    </div>
  );
}
