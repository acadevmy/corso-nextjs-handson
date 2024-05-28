"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

enum AuthError {
  Configuration = "Configuration",
  Default = "Default",
  Verification = "Verification",
  AccessDenied = "AccessDenied",
}

const errorMap = {
  [AuthError.Configuration]: "Si è verificato un problema nella configurazione",
  [AuthError.Verification]:
    "Si è verificato un problema nella verifica del tuo account",
  [AuthError.AccessDenied]: "Il tuo account non ha i permessi",
  [AuthError.Default]: "Qualcosa è andato storto",
};

export default function AuthErrorPage() {
  return (
    <div className="flex border border-red-300 bg-red-500/50 p-8 rounded-md">
      <div>
        <p className="text-xl mb-4">Errore nell&apos;autenticazione</p>
        <Suspense>
          <ErrorMapMessage />
        </Suspense>
      </div>
    </div>
  );
}

function ErrorMapMessage() {
  const search = useSearchParams();
  const authError = search.get("error") as AuthError;

  return <p>{errorMap[authError]}</p>;
}
