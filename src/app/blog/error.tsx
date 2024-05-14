"use client";

import { useEffect } from "react";

import ErrorMessage from "@/components/error-message";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorMessage title="Errore nel blog" error={error} reset={reset} />;
}
