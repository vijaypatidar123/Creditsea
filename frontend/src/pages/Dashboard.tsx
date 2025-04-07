// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth'; // helper to fetch token from localStorage or cookies

interface Loan {
  _id: string;
  loanOfficer: string;
  amount: number;
  dateApplied: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'APPROVED';
}

const Dashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = getToken();
        const response = await axios.get('/api/loans/user-loans', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoans(response.data);
      } catch (error) {
        console.error('Failed to fetch loans:', error);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Applied Loans</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Loan Officer</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date Applied</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan._id} className="border-b">
                <td className="p-4">{loan.loanOfficer}</td>
                <td className="p-4">₦{loan.amount.toLocaleString()}</td>
                <td className="p-4">
                  {new Date(loan.dateApplied).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      loan.status === 'PENDING'
                        ? 'bg-yellow-200 text-yellow-800'
                        : loan.status === 'VERIFIED'
                        ? 'bg-green-200 text-green-800'
                        : loan.status === 'REJECTED'
                        ? 'bg-red-200 text-red-800'
                        : 'bg-blue-200 text-blue-800'
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
