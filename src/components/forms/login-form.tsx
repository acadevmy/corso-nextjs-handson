import { Github } from "lucide-react";

import { signIn } from "@/auth";

function LoginForm() {
  return (
    <form
      action={async () => {
        "use server";

        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="btn btn-secondary w-full flex items-center justify-center"
      >
        <Github className="mr-2" />
        GitHub SignIn
      </button>
    </form>
  );
}

export default LoginForm;
