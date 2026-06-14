import CommunityReviews from "../community/CommunityReviews";
import ReviewCard from "../community/ReviewCard";
import Tab from "./Tab";
import TabContent from "./TabContent";

export default function DetailMain() {
  return (
    <div>
      <Tab />
      <TabContent />
      <CommunityReviews />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
}
