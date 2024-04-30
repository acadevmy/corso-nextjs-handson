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
