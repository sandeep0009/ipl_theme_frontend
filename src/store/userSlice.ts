import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TeamTheme = {
  colors: {
    primary: string;
    secondary: string;
  };
  logo: string;
  welcomeMessage: string;
};

type UserState = {
  token: string | null;
  team: string | null;
  theme: TeamTheme | null;
};

const teamThemes: Record<string, TeamTheme> = {
  CSK: {
    colors: { primary: '#F9CD05', secondary: '#003C6D' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/33/chennai-6258973_1280.png',
    welcomeMessage: 'Welcome to the Chennai Super Kings Fan Store!',
  },
  MI: {
    colors: { primary: '#005DA0', secondary: '#F9A01B' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/32/mumbai-6258971_1280.png',
    welcomeMessage: 'Welcome to the Mumbai Indians Fan Store!',
  },
  RCB: {
    colors: { primary: '#DA1A32', secondary: '#000000' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/31/bangalore-6258967_1280.png',
    welcomeMessage: 'Welcome to the Royal Challengers Bangalore Fan Store!',
  },
  KKR: {
    colors: { primary: '#3B215D', secondary: '#FEC20E' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/34/kolkata-6258975_1280.png',
    welcomeMessage: 'Welcome to the Kolkata Knight Riders Fan Store!',
  },
  DC: {
    colors: { primary: '#004C93', secondary: '#EF1B24' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/34/delhi-6258974_1280.png',
    welcomeMessage: 'Welcome to the Delhi Capitals Fan Store!',
  },
  SRH: {
    colors: { primary: '#F47920', secondary: '#000000' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/35/sunrisers-6258976_1280.png',
    welcomeMessage: 'Welcome to the Sunrisers Hyderabad Fan Store!',
  },
  RR: {
    colors: { primary: '#EA1A84', secondary: '#005BA9' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/35/rajasthan-6258977_1280.png',
    welcomeMessage: 'Welcome to the Rajasthan Royals Fan Store!',
  },
  PBKS: {
    colors: { primary: '#D71920', secondary: '#B8BABF' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/36/punjab-6258978_1280.png',
    welcomeMessage: 'Welcome to the Punjab Kings Fan Store!',
  },
  LSG: {
    colors: { primary: '#1C2C54', secondary: '#FF9933' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/36/lucknow-6258979_1280.png',
    welcomeMessage: 'Welcome to the Lucknow Super Giants Fan Store!',
  },
  GT: {
    colors: { primary: '#1C2B4E', secondary: '#D1AB3E' },
    logo: 'https://cdn.pixabay.com/photo/2021/05/18/16/37/gujarat-6258980_1280.png',
    welcomeMessage: 'Welcome to the Gujarat Titans Fan Store!',
  },
};


const userSlice = createSlice({
  name: 'userToken',
  initialState: {
    token: null,
    team: null,
    theme: null,
  } as UserState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setTeam: (state, action: PayloadAction<string>) => {
      state.team = action.payload;
      console.log(state.team);
      state.theme = teamThemes[action.payload] || null; 

      console.log(state.theme);
    },
    getToken: (state) => {
      return state;
    },
  },
});

export const { setToken, setTeam, getToken } = userSlice.actions;

export default userSlice;
