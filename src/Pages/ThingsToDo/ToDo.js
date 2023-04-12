import React from "react";
import '../ThingsToDo/ToDoStyles.css'

import Galaxy from "../../assets/Galaxy-by-hristo-fidanov.jpg"
import Bored from "../../components/Bored/Bored";
import SpaceX from "../../components/Bored/SpaceX";

function ToDo() {
    return (
        <section className="homes">
            <div className="overlay">
                <img className="img" src={Galaxy} alt="Achtergrondafbeelding van de Melkweg" />

                <div className="content">
                    <div className="grid-item">
                        <Bored/>
                    </div>
                    <div className="grid-item">
                        <SpaceX/>
                    </div>
                    <div className="grid-item">
                        {/* Inhoud van de derde grid item */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToDo
