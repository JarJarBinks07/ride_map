import React from 'react';
import {Box, TextField} from "@mui/material";
import {Autocomplete} from "@react-google-maps/api";

export const MapInput = ({
                             inputRef,
                             onPlaceChanged
                         }: { inputRef: any, onPlaceChanged: () => void }) => {


    return (
        <Box display="flex"
             position={'absolute'}
             top={10}
             zIndex={50}

             width={'100%'}
             justifyContent="center">
            <Box width={'80%'} bgcolor={'white'} borderRadius={10} paddingX={5} paddingY={1}>
                <Autocomplete onPlaceChanged={onPlaceChanged}
                              restrictions={{country: "au"}}
                              onLoad={(ref) => inputRef.current = ref}>
                    <TextField fullWidth size={'small'}
                               placeholder="Chose location"
                               id="standard-basic"
                               variant="standard"/>
                </Autocomplete>
            </Box>
        </Box>
    )
}
