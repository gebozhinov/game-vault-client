import GameGrid from "../game/GameGrid";
import CatalogHeader from "./CatalogHeader";
import FilterSidebar from "./FilterSidebar";

export default function Catalog() {
  return (
    <main className="container">
      <CatalogHeader />
      <div className="catalog-layout">

        <FilterSidebar />
        <GameGrid />
      </div>
    </main>
  );
}
