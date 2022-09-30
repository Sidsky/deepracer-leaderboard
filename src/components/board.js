import React from 'react'
import {Leaderboard} from "./database";
import Profiles from "./profile";
import Header from "./Header"
import Hero from "./Hero"
import { Box } from "@mui/material";

export default function Board(){
    return(
        <div width="100%">
        <Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginRight="145px"
                alignItems="center"
            >
            </Box>
            <Header/>
            
        </Box>
        {/* <Hero/> */}
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Profiles Leaderboard={sorted(Leaderboard)}></Profiles>
            </Box>

        </Box>
        </div>
    )
}

function sorted(data) {
    return data.sort((a, b) => {
        const timeA = a.score.split(/:/);
        const timeB = b.score.split(/:/);
        const timeAMil = parseInt(timeA[0]) * 60000 + parseInt(timeA[1]) * 1000 + parseInt(timeA[2]);
        const timeBMil = parseInt(timeB[0]) * 60000 + parseInt(timeB[1]) * 1000 + parseInt(timeB[2]);
        return timeAMil-timeBMil;
    })
}