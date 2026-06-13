import { useState } from "react";
import CollectionHeader from "./CollectionHeader";
import CollectionTab from "./CollectionTab";
import CompletedSection from "./CompletedSection";
import DroppedSection from "./DroppedSection";
import PlayingSection from "./PlayingSection";
import WishlistSection from "./WishlistSection";
import type { Tab } from "../../interfaces/Tab";

export default function Collection() {
  const [activeTab, setActiveTab] = useState<Tab>("playing");

  return (
    <main className="container">
      <CollectionHeader />
      <CollectionTab activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'playing' && <PlayingSection />}
      {activeTab === 'completed' && <CompletedSection />}
      {activeTab === 'wishlist' && <WishlistSection />}
      {activeTab === 'dropped' && <DroppedSection />}
    </main>
  );
}
