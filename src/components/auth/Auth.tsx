import AuthCollage from "./AuthCollage";
import AuthForm from "./AuthForm";

export default function Auth() {
  return (
    <div className="auth-page">
      <AuthForm />
      <AuthCollage />
    </div>
  );
}
