"use client";

import { useEffect } from "react";

type ErrorMessageProps = {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
};

export default function ErrorMessage({
  error,
  reset,
  title,
}: ErrorMessageProps) {
  return (
    <div className="flex border border-red-300 bg-red-500/50 p-8 rounded-md">
      <div className="flex-1 mr-1">
        <p className="text-xl">{title || error.name}</p>
        <p>message: {error.message}</p>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-4 text-sm">{error.stack}</p>
        )}
      </div>

      <button
        className="btn btn-secondary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Riprova
      </button>
    </div>
  );
}
