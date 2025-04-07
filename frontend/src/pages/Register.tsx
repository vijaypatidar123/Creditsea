import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService'; // 👈 Make sure path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await register(formData); //  Use authService
      console.log('Registration successful:', response);
      alert('Registration successful!');
      navigate('/login');
    } catch (err: any) {
      console.error('Registration error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1e17] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1f2e29] text-white rounded-2xl shadow-lg p-8">
        <div className="bg-green-900/30 text-green-400 text-sm font-medium px-4 py-2 rounded-lg mb-6 text-center">
          Get Your Instant Personal Loan Starting From 14%*
        </div>
        <h2 className="text-3xl font-bold text-center mb-2">Create an Account</h2>
        <p className="text-center text-gray-300 mb-6">
          Register to start managing your loans effortlessly.
        </p>

        {error && (
          <div className="bg-red-800/30 text-red-400 text-sm px-4 py-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-[#2e3b37] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-[#2e3b37] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-[#2e3b37] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-[#2e3b37] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="User">User</option>
              <option value="Verifier">Verifier</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-green-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
