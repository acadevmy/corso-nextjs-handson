import { Github } from "lucide-react";

import { login } from "@/lib/actions";

function LoginForm() {
  return (
    <form action={login}>
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
