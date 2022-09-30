import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, yellow, red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default function Profiles({Leaderboard}){
    return(
        <div id="profile">
            {Item(Leaderboard)}
        </div>
    )
}

function getColor(index){
    const ind = [400, 'A200', 200, 700, 600, 'A400', 'A700', 500, 800, 900]
    let color = null
    if (index >= 1 && index <= 10){
        color =  green[ind[(index-1) % 10]]
    } else if (index <= 20) {
        color = yellow[ind[(index-1) % 10]]
    } else {
        color = red[ind[(index-1) % 10]]
    }
    return color
}

function getElevation(index) {
    if (index <= 2){
        return 20
    }
    return 3
}
  

function Item(data){
    console.log(data)
    return(
        <div class="stratify">
            {
                data.map((value, index) => ( 
                    <Paper elevation={getElevation(index)} sx={{
                        paddingLeft: "10px",
                        paddingTop: "1rem",
                        paddingRight: "10px",
                        borderRadius: "2rem"
                    }}>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="left"
                            marginBottom="10px"
                            height="75px"
                        >
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="20%"
                        >
                            <Stack direction="row" spacing={2}>
                                <Avatar sx={{ width: 56, height: 56, bgcolor: getColor(index + 1)}}><strong>{index + 1}</strong></Avatar>
                            </Stack>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="60%"
                        >
                            <h3 className="name"><strong>{value.name}</strong></h3>
                            <span>{value.location}</span>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="20%"
                            paddingRight="20px"
                        >
                            {value.score == "03:00:000" && <span>N/A</span>}
                            {value.score != "03:00:000" && <span>{value.score}</span>}
                        </Box>

                    </Box>
                    </Paper>
                ))
            }
        </div>
    )
}