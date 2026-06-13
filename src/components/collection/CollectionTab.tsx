import type { CollectionTabProps } from "../../interfaces/CollectionTabProps";

export default function CollectionTab({activeTab, onTabChange}: CollectionTabProps) {
  return (
    <div className="col-tabs">
      <span onClick={() => onTabChange('playing')} className={`col-tab ${activeTab === 'playing' ? 'active' : undefined}`}>
        Playing <span className="pill">3</span>
      </span>
      <span onClick={() => onTabChange('completed')} className={`col-tab ${activeTab === 'completed' ? 'active' : undefined}`}>
        Completed <span className="pill">4</span>
      </span>
      <span onClick={() => onTabChange('wishlist')} className={`col-tab ${activeTab === 'wishlist' ? 'active' : undefined}`}>
        Wishlist <span className="pill">3</span>
      </span>
      <span onClick={() => onTabChange('dropped')} className={`col-tab ${activeTab === 'dropped' ? 'active' : undefined}`}>
        Dropped <span className="pill">0</span>
      </span>
    </div>
  );
}
