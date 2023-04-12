import React, { useState, useEffect } from "react";
import "./BoredStyles.css";

function SpaceX() {
    const [dragons, setDragons] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/dragons")
            .then((response) => response.json())
            .then((data) => {
                setDragons(data);
            })
            .catch((error) => console.error(error));
    }, []);

    function handleSelectChange(event) {
        setSelectedItem(event.target.value);
    }

    return (
        <div>
            <div className="select-container">
                <label htmlFor="dragons">Select a Dragon:</label>
                <select id="dragons" onChange={handleSelectChange}>
                    <option value="">-- Select a Dragon --</option>
                    {dragons.map((dragon) => (
                        <option key={dragon.id} value={dragon.id}>
                            {dragon.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="dragon-container">
                {selectedItem && (
                    <>
                        <h2>{dragons.find((dragon) => dragon.id === selectedItem).name}</h2>
                        <p>
                            <strong>Type:</strong>{" "}
                            {dragons.find((dragon) => dragon.id === selectedItem).type}
                        </p>
                        <p>
                            <strong>Active:</strong>{" "}
                            {dragons.find((dragon) => dragon.id === selectedItem).active
                                ? "Yes"
                                : "No"}
                        </p>
                        <p className="dragon-description">
                            {dragons.find((dragon) => dragon.id === selectedItem).description}
                        </p>
                        <p>
                            <strong>First Flight:</strong>{" "}
                            {dragons.find((dragon) => dragon.id === selectedItem).first_flight}
                        </p>
                        <p>
                            <strong>Crew Capacity:</strong>{" "}
                            {dragons.find((dragon) => dragon.id === selectedItem).crew_capacity}
                        </p>
                        <img
                            src={dragons.find((dragon) => dragon.id === selectedItem).flickr_images[0]}
                            alt="Dragon"
                            className="dragon-image"
                            style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default SpaceX;
