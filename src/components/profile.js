import React from "react";

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
        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
                            {/*<img src={require('./images/1.png')} alt="" />*/}
                            <img src={images[`${index+1}.png`]} className="numbers" alt=""/>>
                            <div className="info">
                                <h3 className="name text-dark">{value.name}</h3>
                                <span>{value.location}</span>
                            </div>
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}