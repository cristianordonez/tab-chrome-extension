import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './index.scss';
import { App } from './popup/App';
import { Theme } from './types';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
const theme: Theme = {
   colors: {
      primary: '#AE71EA',
      secondary: '#4355FA',
      background: '#000000',
      card: '#0F0F0F',
      text: '#FFFFFF',
      border: '#3A3A3A',
      notification: '#0F0F0F',
      error: '#EF4444',
      button: '#9CA5F2',
      success: '#4BD37B',
      black: '#FFFFFF',
   },
   font: 'Lato',
};

const GlobalStyles = styled.div`
   background: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.text};
   font-size: 1em;
   margin: 1em;
`;

root.render(
   <ThemeProvider theme={theme}>
      <GlobalStyles>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </GlobalStyles>
   </ThemeProvider>
);
