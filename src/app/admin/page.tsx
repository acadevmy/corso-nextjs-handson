import Image from "next/image";

import { auth } from "@/auth";
import { logout } from "@/lib/actions";

async function AdminPage() {
  const session = await auth();

  return (
    <div>
      <h1 className="mb-10">Admin 👤</h1>

      <div className="flex gap-20">
        {session?.user?.image && (
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={session?.user?.image} alt="" fill />
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div>
            <p>Nome</p>
            <p className="font-bold">{session?.user?.name}</p>
          </div>

          <div>
            <p>Email</p>
            <p className="font-bold">{session?.user?.email}</p>
          </div>

          <div>
            <p>Scadenza sessione</p>
            <p className="font-bold">{session?.expires}</p>
          </div>

          <form action={logout}>
            <button type="submit" className="btn btn-danger">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
