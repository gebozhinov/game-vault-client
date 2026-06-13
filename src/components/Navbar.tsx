import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link  to="/" className="logo">
          <span className="mark">G</span>Game
          <span className="vault">Vault</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/collection">My Collection</Link>
          <a href="login.html">Login</a>
        </div>
        <div className="nav-right">
          <a href="catalog.html" className="nav-search" aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={11} cy={11} r={7} />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
