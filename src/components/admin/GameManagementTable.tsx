import GameRow from "./GameRow";

export default function GameManagementTable() {
  return (
    <div className="panel-block">
      <div className="pb-head">
        <h2>Game Management</h2>
        <button className="btn btn-accent btn-sm">+ Add New Game</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Platform</th>
            <th>Date Added</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <GameRow />
          <GameRow />
          <GameRow />
          <GameRow />
          <GameRow />
        </tbody>
      </table>
    </div>
  );
}
