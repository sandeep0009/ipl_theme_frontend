import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTeam } from '../store/userSlice'; // Adjust the import path
import axiosInstance from '../helper/axios';

interface FormData {
  name: string;
  email: string;
  password: string;
  iplTeam: string;
}

const Signin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    iplTeam: '',
  });
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/user/signin', formData);
      const {  team } = res.data; 

    
      dispatch(setTeam(team)); 

      setError(null); 
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div>
            <label htmlFor="iplTeam" className="block text-sm font-medium text-gray-700">
              Select Your IPL Team
            </label>
            <select
              id="iplTeam"
              value={formData.iplTeam}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            >
              <option value="" disabled>
                Choose a team
              </option>
              <option value="CSK">Chennai Super Kings</option>
              <option value="MI">Mumbai Indians</option>
              <option value="RCB">Royal Challengers Bangalore</option>
              <option value="KKR">Kolkata Knight Riders</option>
              <option value="DC">Delhi Capitals</option>
              <option value="SRH">Sunrisers Hyderabad</option>
              <option value="RR">Rajasthan Royals</option>
              <option value="PBKS">Punjab Kings</option>
              <option value="LSG">Lucknow Super Giants</option>
              <option value="GT">Gujarat Titans</option>
            </select>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
