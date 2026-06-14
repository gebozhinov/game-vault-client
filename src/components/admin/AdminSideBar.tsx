import AdminUserBadge from "./AdminUserBadge";

export default function AdminSideBar() {
  return (
    <aside className="admin-side">
      <a href="index.html" className="logo">
        <span className="mark">G</span>Game
        <span className="vault">Vault</span>
      </a>
      <nav className="admin-nav">
        <a href="#" className="active">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x={3} y={3} width={7} height={7} />
            <rect x={14} y={3} width={7} height={7} />
            <rect x={14} y={14} width={7} height={7} />
            <rect x={3} y={14} width={7} height={7} />
          </svg>
          Dashboard
        </a>
        <a href="#">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x={3} y={4} width={18} height={16} rx={2} />
            <line x1={3} y1={10} x2={21} y2={10} />
            <line x1={9} y1={20} x2={9} y2={10} />
          </svg>
          Manage Games
        </a>
        <a href="#">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={9} cy={8} r="3.2" />
            <path d="M3 20a6 6 0 0 1 12 0" />
            <path d="M16 5.5a3 3 0 0 1 0 5" />
            <path d="M18.5 20a5.5 5.5 0 0 0-3-4.9" />
          </svg>
          Users
        </a>
        <a href="#">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M4 19V5" />
            <path d="M4 19h16" />
            <rect x={7} y={11} width={3} height={5} />
            <rect x={12} y={8} width={3} height={8} />
            <rect x={17} y={13} width={3} height={3} />
          </svg>
          Reports
        </a>
      </nav>
      <AdminUserBadge />
    </aside>
  );
}
