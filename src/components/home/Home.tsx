import HeroBanner from "./HeroBanner";
import Game from "../game/Game";
import Community from "../community/Community";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="container">
        <Game />
        <Community />
      </main>
    </>
  );
}
