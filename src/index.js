import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import GlobalStyle from './styles';
import App from './routes/app/App';
import Profile from './routes/profile';
import Search from './routes/search';
import NotFound from './routes/notFound';

const theme = createTheme({
  palette: {
    background: {
      paper: '#FAFAFA',
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Search />} />
          <Route path="profile/:login" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
