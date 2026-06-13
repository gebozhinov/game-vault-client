export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="index.html" className="logo">
          <span className="mark">G</span>Game
          <span className="vault">Vault</span>
        </a>
        <div className="nav-links">
          <a href="index.html" className="active">
            Home
          </a>
          <a href="catalog.html">Catalog</a>
          <a href="collection.html">My Collection</a>
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
