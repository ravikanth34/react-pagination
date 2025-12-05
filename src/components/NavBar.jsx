import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/uiSlice';

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => dispatch(toggleSidebar())}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BHP | Touchstone
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Filters','Project Information','Facility','Commodity','Ratio Metrics'].map((t) => (
            <Typography key={t} variant="body2">{t}</Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
