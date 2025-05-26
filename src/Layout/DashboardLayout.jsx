import { Outlet } from 'react-router-dom';
import Sidebar from '../components/DashboardSitebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 mt-14 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
