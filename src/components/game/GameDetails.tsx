import DetailHero from "./DetailHero";
import DetailMain from "./DetailMain";
import SimilarGamesSidebar from "./SimilarGamesSidebar";

export default function GameDetails() {
  return (
    <>
      <DetailHero />
      <main className="container">
        <div className="detail-body">
          <DetailMain />
          <SimilarGamesSidebar />
        </div>
      </main>
    </>
  );
}
