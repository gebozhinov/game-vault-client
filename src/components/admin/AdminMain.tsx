import AdminTopBar from "./AdminTopBar";
import GameFormPanel from "./GameFormPanel";
import GameManagementTable from "./GameManagementTable";
import StatsCard from "./StatsCard";

export default function AdminMain() {
  return (
    <main className="admin-main">
      <AdminTopBar />
      <StatsCard />
      <GameManagementTable />
      <GameFormPanel />
    </main>
  );
}
