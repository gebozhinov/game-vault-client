import DetailCover from "./DetailCover";
import DetailInfo from "./DetailInfo";

export default function DetailHero() {
  return (
    <header className="detail-hero">
      <div className="blur-art" />
      <div className="scrim" />
      <div className="detail-inner">
        <DetailCover />
        <DetailInfo />
      </div>
    </header>
  );
}
