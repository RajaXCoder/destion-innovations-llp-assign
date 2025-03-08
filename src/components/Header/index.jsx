import { useNavigate, useLocation } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa"; // Import icons from React Icons
import { MdOutlineProductionQuantityLimits, MdLogout } from "react-icons/md";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To determine the current route

  // Function to check if a button is active
  const isActive = (path) => location.pathname === path;

  // Function to handle logout
  const handleLogout = () => {
    // Clear the JWT token from localStorage
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="h-[10vh] px-6 py-2 border-b border-blue-400 flex justify-between items-center shadow-lg bg-gray-900">
      {/* Logo/Title */}
      <h2
        className="text-blue-400 font-bold text-lg md:text-xl lg:text-2xl hover:text-blue-300 transition-colors cursor-pointer"
        onClick={() => navigate("/")}
      >
        Destion Innovations LLP
      </h2>

      {/* Navigation Buttons */}
      <div className="flex gap-4 items-center">
        {/* Invoice Button */}
        <button
          className={`px-4 py-2 rounded-md text-sm md:text-md font-semibold transition-all flex items-center gap-2 ${
            isActive("/invoices")
              ? "bg-blue-400 text-gray-900 shadow-lg shadow-blue-400/50"
              : "bg-transparent text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-gray-900"
          }`}
          onClick={() => navigate("/invoices")}
        >
          {/* Show icon on mobile, text on larger screens */}
          <span className="hidden md:inline">Invoice</span>
          <FaFileInvoice className="md:hidden" />
        </button>

        {/* Products Button */}
        <button
          className={`px-4 py-2 rounded-md text-sm md:text-md font-semibold transition-all flex items-center gap-2 ${
            isActive("/products")
              ? "bg-blue-400 text-gray-900 shadow-lg shadow-blue-400/50"
              : "bg-transparent text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-gray-900"
          }`}
          onClick={() => navigate("/products")}
        >
          {/* Show icon on mobile, text on larger screens */}
          <span className="hidden md:inline">Products</span>
          <MdOutlineProductionQuantityLimits className="md:hidden" />
        </button>

        {/* Logout Button */}
        <button
          className={`px-4 py-2 rounded-md text-sm md:text-md font-semibold transition-all flex items-center gap-2 ${
            isActive("/login")
              ? "bg-blue-400 text-gray-900 shadow-lg shadow-blue-400/50"
              : "bg-transparent text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-gray-900"
          }`}
          onClick={handleLogout}
        >
          {/* Show icon on mobile, text on larger screens */}
          <span className="hidden md:inline">Log out</span>
          <MdLogout className="md:hidden" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
