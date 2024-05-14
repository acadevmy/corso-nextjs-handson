import Link from "next/link";

type ErrorMessageNotFoundProps = {
  title: string;
};

export default function ErrorMessageNotFound({
  title,
}: ErrorMessageNotFoundProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-7xl">404</p>
      <h2>{title || "Pagina non trovata"}</h2>

      <Link className="btn btn-primary mt-8" href="/">
        Vai alla Home
      </Link>
    </div>
  );
}
