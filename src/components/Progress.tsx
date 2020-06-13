import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Progress: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height={150}>
            <CircularProgress color="inherit" />
        </Box>
    );
};

export default Progress;
