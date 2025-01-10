import React, { lazy, Suspense } from "react";
import useAuthStore from "./AuthStore";
import Loading from "@/components/Loading";

const AdminDashboard = lazy(() => import("@/components/AdminDashboard"));
const UserDashboard = lazy(() => import("@/components/UserDashboard"));
const LoginDashboard  = lazy(() => import("@/components/login"))


const RoleBasedRouting: React.FC = () => {
  const { user } = useAuthStore();

  const DashboardComponent = React.useMemo(() => {

    switch (user?.role) {
      case "Admin":
        return AdminDashboard;
      case "User":
        return UserDashboard;
      default:
        return LoginDashboard;
    }
  }, [user?.role]);

  return (
      <Suspense fallback={<Loading/>}>
        <DashboardComponent />
      </Suspense>
  );
};

export default RoleBasedRouting;
