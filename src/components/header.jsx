import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function ButtonAppBar() {
  return (
    <header>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Data Generator
            </Typography>
            <IconButton variant="primary"><GitHubIcon /></IconButton>
            </Toolbar>
        </AppBar>
        </Box>
    </header>
  );
}