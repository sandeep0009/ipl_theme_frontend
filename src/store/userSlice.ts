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
      logo: 'https://example.com/logos/csk.png',
      welcomeMessage: 'Welcome to the Chennai Super Kings Fan Store!',
    },
    MI: {
      colors: { primary: '#005DA0', secondary: '#F9A01B' },
      logo: 'https://example.com/logos/mi.png',
      welcomeMessage: 'Welcome to the Mumbai Indians Fan Store!',
    },
    RCB: {
      colors: { primary: '#DA1A32', secondary: '#000000' },
      logo: 'https://example.com/logos/rcb.png',
      welcomeMessage: 'Welcome to the Royal Challengers Bangalore Fan Store!',
    },
    KKR: {
      colors: { primary: '#3B215D', secondary: '#FEC20E' },
      logo: 'https://example.com/logos/kkr.png',
      welcomeMessage: 'Welcome to the Kolkata Knight Riders Fan Store!',
    },
    DC: {
      colors: { primary: '#004C93', secondary: '#EF1B24' },
      logo: 'https://example.com/logos/dc.png',
      welcomeMessage: 'Welcome to the Delhi Capitals Fan Store!',
    },
    SRH: {
      colors: { primary: '#F47920', secondary: '#000000' },
      logo: 'https://example.com/logos/srh.png',
      welcomeMessage: 'Welcome to the Sunrisers Hyderabad Fan Store!',
    },
    RR: {
      colors: { primary: '#EA1A84', secondary: '#005BA9' },
      logo: 'https://example.com/logos/rr.png',
      welcomeMessage: 'Welcome to the Rajasthan Royals Fan Store!',
    },
    PBKS: {
      colors: { primary: '#D71920', secondary: '#B8BABF' },
      logo: 'https://example.com/logos/pbks.png',
      welcomeMessage: 'Welcome to the Punjab Kings Fan Store!',
    },
    LSG: {
      colors: { primary: '#1C2C54', secondary: '#FF9933' },
      logo: 'https://example.com/logos/lsg.png',
      welcomeMessage: 'Welcome to the Lucknow Super Giants Fan Store!',
    },
    GT: {
      colors: { primary: '#1C2B4E', secondary: '#D1AB3E' },
      logo: 'https://example.com/logos/gt.png',
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
      state.theme = teamThemes[action.payload] || null; 
    },
    getToken: (state) => {
      return state;
    },
  },
});

export const { setToken, setTeam, getToken } = userSlice.actions;

export default userSlice;
