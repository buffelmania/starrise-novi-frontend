import React from "react";
import '../ThingsToDo/ToDoStyles.css'

import Galaxy from "../../assets/Galaxy-by-hristo-fidanov.jpg"
import Bored from "../../components/Bored/Bored";
import SpaceX from "../../components/Bored/SpaceX";
import { Link } from "react-router-dom";


function ToDo() {
    return (
        <section className="ToDo">
            <div className="overlay">
                <img className="img" src={Galaxy} alt="Achtergrondafbeelding van de Melkweg" />

                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1">
                        <Bored/>
                    </div>
                        <div className="grid-item item2">
                        <SpaceX/>
                    </div>
                        <div className="grid-item item3">
                            <h5>Doe een Quiz</h5>
                            <Link to="/Quiz"><button>Naar de Quiz</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToDo
