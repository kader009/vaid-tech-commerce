import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/Register';

function App() {
  // const PrivateRoute = ({ children }) => {
  //   const token = localStorage.getItem('accessToken');
  //   return token ? children : <Navigate to="/login" />;
  // };

  return (
    <>
      <BrowserRouter>
    {/* toast */}
    <Toaster/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
              <Dashboard />
            // </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
