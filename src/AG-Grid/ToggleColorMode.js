import React, { useState } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TableGridCell from './CustomFilter';

const ToggleColorMode = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button onClick={toggleColorMode}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </button>
        <TableGridCell />
      </div>
    </ThemeProvider>
  );
};

export default ToggleColorMode;
