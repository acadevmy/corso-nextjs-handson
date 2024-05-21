import React from "react";

type FormFieldErrorProps = {
  labels?: string[];
};

function FormFieldError({ labels }: FormFieldErrorProps) {
  if (!labels?.length) return null;

  return (
    <div className="mt-2 text-red-500 text-sm">
      {labels?.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
}

export default FormFieldError;
