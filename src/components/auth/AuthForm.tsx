import { useState } from "react";
import AuthBrand from "./AuthBrand";
import AuthDivider from "./AuthDrive";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import OAuthButtons from "./OAuthButtons";
import RegisterForm from "./RegisterForm";
import type { Tab } from "../../types";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<Tab>("login");
  return (
    <div className="auth-left">
      <div className="auth-card">
        <AuthBrand />
        <div className="auth-box">
          <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === "login" && (
            <>
              <LoginForm />
              <AuthDivider />
              <OAuthButtons />
              <div className="auth-foot">
                New to GameVault? <a href="#" onClick={() => setActiveTab('register')}>Create an account →</a>
              </div>
            </>
          )}
          {activeTab === "register" && <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
