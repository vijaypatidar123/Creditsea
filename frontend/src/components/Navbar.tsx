import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-green-900">💰 CreditSea</div>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <span className="cursor-pointer hover:text-green-800">Home</span>
          <span className="cursor-pointer hover:text-green-800">Loan Products</span>
          <span className="cursor-pointer hover:text-green-800">Loan Calculators</span>
          <span className="cursor-pointer hover:text-green-800">Repay Loan</span>
          <span className="cursor-pointer hover:text-green-800">Blogs</span>
          <span className="cursor-pointer hover:text-green-800">Support</span>
          <span className="cursor-pointer hover:text-green-800">Free Consultation</span>
        </div>

        {/* Sign In Button */}
        <div>
          <button
            onClick={() => navigate('/login')}
            className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-xl text-sm transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
