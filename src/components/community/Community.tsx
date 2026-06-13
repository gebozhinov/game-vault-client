import CommunityCard from "./CommunityCard";

export default function Community() {
  return (
    <section>
      <div className="section-head">
        <h2>Recently Added by Community</h2>
        <a href="catalog.html" className="see-all">
          Browse community →
        </a>
      </div>
      <div className="community-row">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </section>
  );
}
