import { Link } from "react-router";
import GameCard from "./GameCard";

export default function Game() {
  return (
    <section>
      <div className="section-head">
        <h2>Trending This Week</h2>
        <Link to="/catalog" className="see-all">
          View all →
        </Link>
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
