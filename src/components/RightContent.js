import React from 'react';
import Box from "@mui/material/Box";

function RightContent(props) {
    return (
        <Box
            bgcolor={'green'}
            flex={2}
            justifyContent={'center'}
            sx={{display:{xs:'none',sm:'block'}}}
        >
           <h2>RightContent</h2>
           <p>ccccccccccccccccccccccccc</p>
        </Box>
    );
}

export default RightContent;