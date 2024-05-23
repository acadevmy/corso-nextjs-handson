import LoginForm from "@/components/forms/login-form";

function LoginPage() {
  return (
    <div>
      <div className="max-w-md mx-auto bg-zinc-800 rounded-md p-8">
        <h1 className="mb-10">Login 🔐</h1>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
