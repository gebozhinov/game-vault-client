export default function RegisterForm() {
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
      <div className="field">
        <label>Confirm Password</label>
        <input type="confirmPassword" placeholder="••••••••••" />
      </div>
      <button className="btn btn-accent btn-block btn-lg">Register</button>
    </div>
  );
}
