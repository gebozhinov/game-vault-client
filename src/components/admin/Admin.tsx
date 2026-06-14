import AdminMain from "./AdminMain";
import AdminSideBar from "./AdminSideBar";

export default function Admin() {
  return (
    <div className="admin-shell">
      <AdminSideBar />
      <AdminMain />
    </div>
  );
}
