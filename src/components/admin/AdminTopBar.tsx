export default function AdminTopBar() {
  return (
    <div className="admin-topbar">
      <div>
        <h1>Dashboard</h1>
        <div className="crumbs">ADMIN / OVERVIEW</div>
      </div>
      <a href="catalog.html" className="btn btn-ghost">
        View public site →
      </a>
    </div>
  );
}
