import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import GlobalStyle from './styles';
import App from './routes/app/App';
import Profile from './routes/profile';
import Home from './routes/home';
import NotFound from './routes/notFound';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="profile/:login" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
