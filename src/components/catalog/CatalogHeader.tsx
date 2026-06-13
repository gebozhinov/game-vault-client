import SearchInput from "./SearchInput";
import SortDropdown from "./SortDropdown";

export default function CatalogHeader() {
  return (
    <div className="page-title-bar">
      <h1>
        All Games <span className="count-badge">2,418</span>
      </h1>
      <div className="toolbar">
        <SearchInput />
        <SortDropdown />
      </div>
    </div>
  );
}
