import Image from "next/image";

import { auth } from "@/auth";
import { logout } from "@/lib/actions";

type Props = {};

async function SessionInfo({}: Props) {
  const session = await auth();
  return (
    <div className="flex gap-20">
      {session?.user?.image && (
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={session?.user?.image}
            alt=""
            fill
            className="object-cover"
          />
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
  );
}

export default SessionInfo;
