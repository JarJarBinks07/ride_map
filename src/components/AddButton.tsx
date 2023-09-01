import React from 'react';
import {Box, Button} from "@mui/material";

export const AddButton = ({onClick, isVisible}: { onClick: () => void, isVisible: boolean }) => {
    return (
        <Box position={'absolute'}
             zIndex={50}
             bottom={20}
             width={"100%"}
             display={isVisible ? 'flex' : 'none'}
             justifyContent={'center'}
        >
            <Button style={{width: '200px'}} onClick={onClick} variant="contained">Add Place</Button>
        </Box>
    )
}
