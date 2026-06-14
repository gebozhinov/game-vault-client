import MiniGameCard from "./MiniGameCard";

export default function SimilarGamesSidebar() {
    return (
        <aside className="side-panel">
            <h3>Similar Games</h3>
            <MiniGameCard />
            <MiniGameCard />
            <MiniGameCard />
          </aside>
    )
}