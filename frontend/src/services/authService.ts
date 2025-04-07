import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  const { token } = res.data;
  localStorage.setItem('token', token);
  return res.data;
};

export const register = async ({
  name,
  email,
  password,
  role,
}: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  const res = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    role,
  });
  return res.data;
};
