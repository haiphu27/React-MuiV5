import React from 'react';
import Box from "@mui/material/Box";

function LeftContent(props) {
    return (
        <Box
            bgcolor={'red'}
            flex={2}
            sx={{display:{xs:'none',sm:'none',md:'block'}}}
        >
            <h2>Left Content</h2>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </Box>
    );
}

export default LeftContent;