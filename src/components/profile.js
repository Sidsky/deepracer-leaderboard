import React from "react";
import { Box } from "@mui/material";

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

function Item(data){
    return(
        <div className="stratify">
            {
                data.map((value, index) => (
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
                            <img src={images[`${index+1}.png`]} className="numbers" alt=""/>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="60%"
                            // alignItems="left"
                        >
                            <h3 className="name text-dark">{value.name}</h3>
                            <span>{value.location}</span>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="20%"
                            paddingRight="20px"
                        >
                            <span>{value.score}</span>
                        </Box>

                    </Box>
                ))
            }
        </div>
    )
}