import React, { useState, useEffect } from "react";
import "./BoredStyles.css";

function Bored() {

    function ActivityCard({ activity, handleClick }) {
        const [flipped, setFlipped] = useState(false);

        function handleCardClick() {
            setFlipped(!flipped);
        }

        return (
            <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleCardClick}>
                <div className="card-front">
                    <p>{activity}</p>
                    <button onClick={handleClick}>Nieuwe activiteit</button>
                </div>
                <div className="card-back" onClick={handleCardClick}>
                    <p>Dit is de achterkant :-). Klik nog een keer om de voorkant te zien.</p>
                </div>
            </div>
        );
    }

    const [activity, setActivity] = useState("");
    const [key, setKey] = useState(Date.now());

    useEffect(() => {
        getNewActivity();
    }, []);

    function getNewActivity() {
        fetch("http://www.boredapi.com/api/activity/")
            .then((response) => response.json())
            .then((data) => {
                setActivity(data.activity);
            })
            .catch((error) => console.error(error));
    }

    function handleClick() {
        setKey(Date.now());
        getNewActivity();
    }

    return (
        <div>
            <ActivityCard activity={activity} handleClick={handleClick} />
        </div>
    );
}

export default Bored;
