import type { Tab } from "../../types";

interface AuthFormTabProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function AuthTabs({ activeTab, onTabChange }: AuthFormTabProps) {
  return (
    <div className="auth-tabs">
      <span
        onClick={() => onTabChange("login")}
        className={`at ${activeTab === "login" ? "active" : ""}`}
      >
        Login
      </span>
      <span
        onClick={() => onTabChange("register")}
        className={`at ${activeTab === "register" ? "active" : ""}`}
      >
        Register
      </span>
    </div>
  );
}
