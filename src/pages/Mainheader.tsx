import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { minHeight } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';

export default function ButtonAppBar() {
  return (
    <Box 
    sx={{ flexGrow: 1 }}
    style={{backgroundColor:"red"}}
    >
      <AppBar 
      position="static"
      style={{
        backgroundColor:"#005075",
        height:"42px",
        minHeight:"42px"
    }}
      >
        <Toolbar
          style={{
            // backgroundColor:"#005075",
            // height:"42px",
            minHeight:"42px"
        }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
          </Typography>
      
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}