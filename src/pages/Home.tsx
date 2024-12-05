import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router';

const Home: React.FC = () => {
  
  const team = useSelector((state: RootState) => {console.log(state.userToken); state.userToken.team});
  const theme = useSelector((state: RootState) => state.userToken.theme);
  const navigate=useNavigate();

  if (!theme)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl font-bold text-gray-800 text-center">
          Please log in to see your team store.
        </p>
      </div>
    );

    const handleShopping=()=>{
      navigate('/products');

    }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
      }}
    >
      <div className="text-center">
        <img
          src={theme.logo}
          alt={`${team} Logo`}
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />
        <h1 className="text-4xl font-bold">{theme.welcomeMessage}</h1>
        <p className="mt-4 text-lg font-medium">
          Enjoy shopping for your favorite team's merchandise!
        </p>
      </div>
      <button
        className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg bg-white shadow-md hover:shadow-lg hover:bg-opacity-90 transition"
        style={{ color: theme.colors.primary }}
        onClick={handleShopping}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default Home;
