import AuthBrand from "./AuthBrand"
import AuthDivider from "./AuthDrive";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import OAuthButtons from "./OAuthButtons";

export default function AuthForm() {
  return (
    <div className="auth-left">
      <div className="auth-card">
        <AuthBrand />
        <div className="auth-box">
          <AuthTabs />
          <LoginForm />
          <AuthDivider />
          <OAuthButtons />
          <div className="auth-foot">
            New to GameVault? <a href="#">Create an account →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
