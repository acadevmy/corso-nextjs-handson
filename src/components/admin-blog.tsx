import Link from "next/link";

type Props = {};

function AdminBlog({}: Props) {
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <h2>Impostazioni blog</h2>

        <Link href="/admin/blog/create" className="btn btn-primary">
          Nuovo articolo
        </Link>
      </div>
    </div>
  );
}

export default AdminBlog;
