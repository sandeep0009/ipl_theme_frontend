
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Home: React.FC = () => {
  const { team, theme } = useSelector((state: RootState) => state.userToken);
  console.log(theme,team)
  
  if (!theme) return <p>Please log in to see your team store.</p>;

  return (
    <div
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <img src={theme.logo} alt={`${team} Logo`} style={{ height: '100px' }} />
      <h1>{theme.welcomeMessage}</h1>
      <p>Enjoy shopping for your favorite team's merchandise!</p>
    </div>
  );
};

export default Home;
