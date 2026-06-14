export default function LoginForm() {
  return (
    <div className="auth-form-login">
      <div className="field">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" placeholder="••••••••••" />
      </div>
      <div className="field-row">
        <a href="#">Forgot password?</a>
      </div>
      <button className="btn btn-accent btn-block btn-lg">Sign In</button>
    </div>
  );
}
