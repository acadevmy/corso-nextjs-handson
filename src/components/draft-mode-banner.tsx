import { CircleX } from "lucide-react";
import { draftMode } from "next/headers";

function DraftModeBanner() {
  const { isEnabled } = draftMode();

  const disableDraftMode = async () => {
    "use server";

    draftMode().disable();
  };

  return (
    isEnabled && (
      <div className="p-2 bg-orange-500 mb-10 rounded-md flex justify-between items-center">
        <p>Draft mode attiva</p>
        <form action={disableDraftMode}>
          <button className="btn btn-secondary" type="submit">
            <CircleX width={16} height={16} />
          </button>
        </form>
      </div>
    )
  );
}

export default DraftModeBanner;
