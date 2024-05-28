import AdminBlog from "@/components/admin-blog";
import SessionInfo from "@/components/session-info";

async function AdminPage() {
  return (
    <div>
      <h1 className="mb-10">Admin 👤</h1>

      <SessionInfo />

      <AdminBlog />
    </div>
  );
}

export default AdminPage;
