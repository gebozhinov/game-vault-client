export default function FilterSidebar() {
    return (
        <aside className="filters">
  <div className="filter-group">
    <h4>Genre</h4>
    <label className="check checked">
      <span className="box" />
      RPG <span className="cnt">612</span>
    </label>
    <label className="check">
      <span className="box" />
      FPS <span className="cnt">488</span>
    </label>
    <label className="check checked">
      <span className="box" />
      Strategy <span className="cnt">341</span>
    </label>
    <label className="check">
      <span className="box" />
      Sports <span className="cnt">127</span>
    </label>
    <label className="check">
      <span className="box" />
      Horror <span className="cnt">203</span>
    </label>
    <label className="check">
      <span className="box" />
      Indie <span className="cnt">897</span>
    </label>
  </div>
  <div className="filter-group">
    <h4>Platform</h4>
    <label className="check checked">
      <span className="box" />
      PC <span className="cnt">2,011</span>
    </label>
    <label className="check">
      <span className="box" />
      PS5 <span className="cnt">934</span>
    </label>
    <label className="check">
      <span className="box" />
      Xbox <span className="cnt">812</span>
    </label>
    <label className="check">
      <span className="box" />
      Switch <span className="cnt">566</span>
    </label>
  </div>
  <div className="filter-group">
    <h4>Status</h4>
    <label className="check">
      <span className="box" />
      Playing <span className="cnt">14</span>
    </label>
    <label className="check">
      <span className="box" />
      Completed <span className="cnt">82</span>
    </label>
    <label className="check">
      <span className="box" />
      Wishlist <span className="cnt">37</span>
    </label>
  </div>
  <div className="filter-group">
    <h4>Minimum Rating</h4>
    <div className="slider">
      <div className="fill" />
      <div className="knob" />
    </div>
    <div className="slider-labels">
      <span>0★</span>
      <span>3.0★</span>
      <span>5★</span>
    </div>
  </div>
</aside>

    )
}