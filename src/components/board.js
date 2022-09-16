import React, {useState} from 'react'
import Profiles from "./profile";
import {Leaderboard} from "./database";

export default function Board(){

    const [period, setPeriod] = useState(0);

    const handleClick = (e) => {
        setPeriod(e.target.dataset.id)
    }

    return(
        <div className="board">
            <img className="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEX////uNCTuMiHtFgD6z8z0kYv+9PTtKRTtHgDuLRvuKxjycGj72dftIwr//PztIQT8393vRjnwTkLyeHHvPC3+8vLsAAD3ran0iYT2oZ384+Hxa2Pydm7vPS/wUEXxWE0lwb38AAADH0lEQVR4nO3ZCXKbQBBAUZAStFpOrCXK6vvfMiBAzNI9Ahcp0eT/EwyPmYaCLCMiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqL/p/O36+fhXb//ePbCx+vwUvxcroa2PmWvX5699LE6nC5FtnvJh7X9esgWy5kgFKfNssiGIlQEWT4ThJIgrwyGIdwISoPFegYIFUFtMAShJigN8hkg3Agag/4IDUFlYP841AStQV+EluBmYB2hIbgb9EO4E9QGthFags6gD0JH0BhYngl3AsfgMYJD0BrYRegIXINHCC7B3cAqgkPgGaQRPILOwOZMcAl8gxSCT+AYWETwCAIDHSEgcA3sIfgEoYGGEBJ4BtZmQkAQGcgIEYFvYAshJIgNJISYIDCwdBwiAsEgRhAIQgM7CDGBZBAiSASRgRUEgUA08BFEgtjABoJEIBu4CDKBYGBhMIoEikGHoBBIBtPfCTKBZtAiaASiwdQRFALVoEZQCWSDaSNoBLpBhaATKAZTRlAJEgbZbqkTaAbTRTgvNIKUQXbVCVSDEmE//gWM0a/XDxgUvxNXoxps3xKqT+2oIegGRb5J3FLNYPv2T9Y/ShqCanDON6l9rRhMmUBF0AwqgtThlg2mTaAhKAY1QQJBNJg6gYIgGxR5+yDRECSD6RPICKJBR6AiCAYrAwQigmRwzt3XCRkhNrBBICEIBj6BghAZWCEQEGKDkEBGCA3sEMQIkUFMICIEBpYIIoTQoBAIJATfwBZBiBAYyAQCgmdgjSBA8A2kgyAjuAb2CHwEz0AniBAcA4sEHoJrkCIIEToDmwQugmOQJggQ7gZWCRyEzkAbhzJCa2CXoEO4GzzaBQFCY7D686T1j1KD0Br0IXARagPbBC1CY9CPwEG4GVgnaBBqg74EHUJlYHkWtFUIN4NC//auIZQG9ndB1XF9M0j8flAR8sU8CCqE0qD/QXAQZrILqo6Xw+P3AgnBwrfDvu32L8v14C7792cvfMw+fazEr0giIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIpptfwEc/CjFucDMkgAAAABJRU5ErkJggg==" alt="" />
            <img className="image" src="https://www.softwareone.com/-/media/global/logos/aws-logo-teaser.png?rev=7faf0711601f44be8c333218fb2de560&sc_lang=zh-hk&hash=B67527555D38CACE74BC66F96E1F8AD8" alt="" />

            <h1 className="leaderboard">AWS Deepracer Leaderboard</h1>

            <Profiles Leaderboard={Leaderboard}></Profiles>
        </div>

    )
}

