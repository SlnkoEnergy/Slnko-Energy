import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Optional: Add a sidebar or heading for services here */}
      <Outlet />
    </div>
  );
};

export default Layout;
