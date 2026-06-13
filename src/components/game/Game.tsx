import GameCard from "./GameCard";

export default function Game() {
  return (
    <section>
      <div className="section-head">
        <h2>Trending This Week</h2>
        <a href="catalog.html" className="see-all">
          View all →
        </a>
      </div>
      <div className="row-4">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </section>
  );
}
