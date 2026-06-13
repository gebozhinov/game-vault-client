import type { Tab } from "./Tab";

export interface CollectionTabProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}
