import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const header = () => (
    <AppBar position = 'sticky' color = 'secondary'>
        <Toolbar>
            <Typography variant="title" color="inherit">
                React App
            </Typography>
        </Toolbar>
    </AppBar>
);

export default header;