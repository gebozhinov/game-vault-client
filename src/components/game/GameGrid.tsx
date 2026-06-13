import GameCard from "./GameCard";

export default function GameGrid() {
  return (
    <section>
      <div className="grid-3">
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
        <GameCard showAddButton={true} />
      </div>
      {/* COMPONENT: Pagination */}
      <nav className="pagination">
        <span className="pg">←</span>
        <span className="pg active">1</span>
        <span className="pg">2</span>
        <span className="pg">3</span>
        <span className="pg">4</span>
        <span className="pg dots">…</span>
        <span className="pg">86</span>
        <span className="pg">→</span>
      </nav>
    </section>
  );
}
