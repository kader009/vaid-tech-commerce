import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/Register';
import Allproduct from './pages/Allproduct';
import Layout from './Layout/Layout';
import DashboardLayout from './Layout/DashboardLayout';

function App() {
  // const PrivateRoute = ({ children }) => {
  //   const token = localStorage.getItem('accessToken');
  //   return token ? children : <Navigate to="/login" />;
  // };

  return (
    <>
      <BrowserRouter>
        <Toaster />

        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Routes with Navbar/Footer */}
          <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardLayout />}/>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/dashboard"
              element={
                // <PrivateRoute>
                  <Dashboard />
                // </PrivateRoute>
              }
            />
          </Route>
          <Route path='/dashboard/all-products' element={<Allproduct/>}/>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
