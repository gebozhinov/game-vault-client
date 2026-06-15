import { useForm } from "../../hooks/useForm";

const PLATFORMS = ["PC", "PS5", "Xbox", "Switch"];

const initialValues = {
  title: "",
  developer: "",
  publisher: "",
  genre: "Action RPG",
  releaseYear: "",
  coverUrl: "",
  description: "",
  PC: false,
  PS5: false,
  Xbox: false,
  Switch: false,
};

export default function GameFormPanel() {
  const { values, changeHandler, reset } = useForm(initialValues);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(values);
  }

  function handleReset() {
    reset();
  }

  return (
    <div className="panel-block">
      <div className="pb-head">
        <h2>Add New Game</h2>
        <span className="tag">EDITING: NEW ENTRY</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="title">Game Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={values.title}
              onChange={changeHandler}
              placeholder="e.g. Ashen Dominion"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="developer">Developer</label>
            <input
              id="developer"
              name="developer"
              type="text"
              value={values.developer}
              onChange={changeHandler}
              placeholder="e.g. Greymoor Interactive"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="publisher">Publisher</label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              value={values.publisher}
              onChange={changeHandler}
              placeholder="e.g. Aether House"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="genre">Genre</label>
            <select id="genre" name="genre" className="field-select" value={values.genre} onChange={changeHandler}>
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
                  className={`check ${values[platform as keyof typeof values] ? "checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    name={platform}
                    checked={!!values[platform as keyof typeof values]}
                    onChange={changeHandler}
                    style={{ display: "none" }}
                  />
                  <span className="box" />
                  {platform}
                </label>
              ))}
            </div>
          </div>
          <div className="field">
            <label htmlFor="releaseYear">Release Year</label>
            <input
              id="releaseYear"
              name="releaseYear"
              type="text"
              value={values.releaseYear}
              onChange={changeHandler}
              placeholder="2026"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="coverUrl">Cover Image URL</label>
            <input
              id="coverUrl"
              name="coverUrl"
              value={values.coverUrl}
              onChange={changeHandler}
              type="url"
              placeholder="https://cdn.gamevault.gg/covers/..."
            />
          </div>
          <div className="field full">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={changeHandler}
              rows={4}
              placeholder="Write a short synopsis of the game..."
            />
          </div>
        </div>
        <div className="form-foot">
          <button type="submit" className="btn btn-accent">
            Save Game
          </button>
          <button type="button" className="btn btn-ghost" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
