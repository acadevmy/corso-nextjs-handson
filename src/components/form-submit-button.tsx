"use client";

import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  label?: string;
};

function FormSubmitButton({ label = "Invia" }: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {label}
    </button>
  );
}

export default FormSubmitButton;
