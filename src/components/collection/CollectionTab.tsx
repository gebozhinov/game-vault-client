import type { Tab } from "../../types";

interface CollectionTabProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function CollectionTab({activeTab, onTabChange}: CollectionTabProps) {
  return (
    <div className="col-tabs">
      <span onClick={() => onTabChange('playing')} className={`col-tab ${activeTab === 'playing' ? 'active' : ''}`}>
        Playing <span className="pill">3</span>
      </span>
      <span onClick={() => onTabChange('completed')} className={`col-tab ${activeTab === 'completed' ? 'active' : ''}`}>
        Completed <span className="pill">4</span>
      </span>
      <span onClick={() => onTabChange('wishlist')} className={`col-tab ${activeTab === 'wishlist' ? 'active' : ''}`}>
        Wishlist <span className="pill">3</span>
      </span>
      <span onClick={() => onTabChange('dropped')} className={`col-tab ${activeTab === 'dropped' ? 'active' : ''}`}>
        Dropped <span className="pill">0</span>
      </span>
    </div>
  );
}
