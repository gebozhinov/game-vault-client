import { useState } from "react";

const PLATFORMS = ["PC", "PS5", "Xbox", "Switch"];

export default function GameFormPanel() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(
    new Set(),
  );

  function togglePlatform(platform: string) {
    setSelectedPlatforms((prev) => {
      const next = new Set(prev);
      console.log(next);
      next.has(platform) ? next.delete(platform) : next.add(platform);
      return next;
    });
  }

  return (
    <div className="panel-block">
      <div className="pb-head">
        <h2>Add New Game</h2>
        <span className="tag">EDITING: NEW ENTRY</span>
      </div>
      <div className="form-grid">
        <div className="field">
          <label>Game Title</label>
          <input type="text" placeholder="e.g. Ashen Dominion" />
        </div>
        <div className="field">
          <label>Developer</label>
          <input type="text" placeholder="e.g. Greymoor Interactive" />
        </div>
        <div className="field">
          <label>Publisher</label>
          <input type="text" placeholder="e.g. Aether House" />
        </div>
        <div className="field">
          <label>Genre</label>
          <select className="field-select">
            <option>Action RPG</option>
            <option>FPS</option>
            <option>Strategy</option>
            <option>Sports</option>
            <option>Horror</option>
            <option>Indie</option>
          </select>
        </div>
        <div className="field full">
          <label>Platform</label>
          <div className="platform-checks">
            {PLATFORMS.map((platform) => (
              <label
                key={platform}
                className={`check ${selectedPlatforms.has(platform) ? "checked" : ""}`}
                onClick={() => togglePlatform(platform)}
              >
                <span className="box" />
                {platform}
              </label>
            ))}
          </div>
        </div>
        <div className="field">
          <label>Release Year</label>
          <input type="text" placeholder="2026" />
        </div>
        <div className="field">
          <label>Cover Image URL</label>
          <input
            type="text"
            placeholder="https://cdn.gamevault.gg/covers/..."
          />
        </div>
        <div className="field full">
          <label>Description</label>
          <textarea
            rows={4}
            placeholder="Write a short synopsis of the game..."
            defaultValue={""}
          />
        </div>
      </div>
      <div className="form-foot">
        <button className="btn btn-accent">Save Game</button>
        <button className="btn btn-ghost">Cancel</button>
      </div>
    </div>
  );
}
