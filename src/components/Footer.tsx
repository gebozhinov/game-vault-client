export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="f-brand">
          <a href="index.html" className="logo">
            <span className="mark">G</span>Game
            <span className="vault">Vault</span>
          </a>
          <p>
            Track your backlog, discover your next obsession, and build a
            collection worth showing off.
          </p>
          <div className="f-social">
            <a href="#" aria-label="Discord">
              DC
            </a>
            <a href="#" aria-label="X">
              X
            </a>
            <a href="#" aria-label="Reddit">
              RD
            </a>
            <a href="#" aria-label="Twitch">
              TW
            </a>
          </div>
        </div>
        <div className="f-links">
          <div className="f-col">
            <h5>Product</h5>
            <a href="catalog.html">Catalog</a>
            <a href="collection.html">My Collection</a>
            <a href="index.html">Featured</a>
          </div>
          <div className="f-col">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <span>© 2026 GameVault. All rights reserved.</span>
        <span>BUILT FOR PLAYERS</span>
      </div>
    </footer>
  );
}
