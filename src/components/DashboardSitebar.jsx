import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // lucide-react for icons (optional)

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile toggle

  const linkClasses = (path) =>
    `block px-4 py-2 rounded hover:bg-indigo-600 transition ${
      currentPath === path ? 'bg-indigo-600 text-white' : 'text-gray-300'
    }`;

  // Auto expand based on path
  useEffect(() => {
    if (currentPath.startsWith('/dashboard/categories')) setIsCategoryOpen(true);
    if (currentPath.startsWith('/dashboard/products')) setIsProductOpen(true);
  }, [currentPath]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out mt-14
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
      >
        <div className="p-4 text-2xl font-bold border-b border-gray-700 mt-12 md:mt-0">
          Admin Panel
        </div>
        <nav className="mt-4 space-y-1 px-2 h-screen">
          <Link to="/dashboard" className={linkClasses('/dashboard')} onClick={() => setIsSidebarOpen(false)}>
            Dashboard
          </Link>

          {/* Categories */}
          <div>
            <button
              className="w-full text-left px-4 py-2 rounded hover:bg-indigo-600 transition text-gray-300"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              Categories
            </button>
            {isCategoryOpen && (
              <div className="ml-4 space-y-1">
                <Link to="/dashboard/categories" className={linkClasses('/dashboard/categories')} onClick={() => setIsSidebarOpen(false)}>
                  All Categories
                </Link>
                <Link to="/dashboard/categories/create" className={linkClasses('/dashboard/categories/create')} onClick={() => setIsSidebarOpen(false)}>
                  Create Category
                </Link>
              </div>
            )}
          </div>

          {/* Products */}
          <div>
            <button
              className="w-full text-left px-4 py-2 rounded hover:bg-indigo-600 transition text-gray-300"
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              Products
            </button>
            {isProductOpen && (
              <div className="ml-4 space-y-1">
                <Link to="/dashboard/all-products" className={linkClasses('/dashboard/products')} onClick={() => setIsSidebarOpen(false)}>
                  All Products
                </Link>
                <Link to="/dashboard/products/create" className={linkClasses('/dashboard/products/create')} onClick={() => setIsSidebarOpen(false)}>
                  Create Product
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
