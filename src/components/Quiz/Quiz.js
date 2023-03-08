import React, { useState } from "react";
import "./CSS/QuizStyles.css";


const vragen = [
    {
        vraag: "Wat is de hoofdstad van Nederland?",
        antwoorden: ["Amsterdam", "Rotterdam", "Den Haag"],
        juisteAntwoord: "Amsterdam"
    },
    {
        vraag: "Hoeveel benen heeft een spin?",
        antwoorden: ["4", "6", "8"],
        juisteAntwoord: "8"
    },
    {
        vraag: "Wie heeft de uitvinding van de telefoon gepatenteerd?",
        antwoorden: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"],
        juisteAntwoord: "Alexander Graham Bell"
    },
    {
        vraag: "Welke planeet is het dichtst bij de zon?",
        antwoorden: ["Mercurius", "Venus", "Aarde"],
        juisteAntwoord: "Mercurius"
    },
    {
        vraag: "Welke kunstenaar sneed zijn eigen oor af?",
        antwoorden: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        juisteAntwoord: "Vincent van Gogh"
    },
    {
        vraag: "Wat is de grootste oceaan op aarde?",
        antwoorden: ["Atlantische Oceaan", "Indische Oceaan", "Stille Oceaan"],
        juisteAntwoord: "Stille Oceaan"
    },
    {
        vraag: "Wie is de hoofdpersoon in het boek 'De Da Vinci Code'?",
        antwoorden: ["Robert Langdon", "Dan Brown", "Sophie Neveu"],
        juisteAntwoord: "Robert Langdon"
    },
    {
        vraag: "Welke kleur krijg je als je blauw en geel mengt?",
        antwoorden: ["Groen", "Paars", "Oranje"],
        juisteAntwoord: "Groen"
    },
    {
        vraag: "Hoeveel melktanden heeft een kind?",
        antwoorden: ["12", "20", "32"],
        juisteAntwoord: "20"
    },
    {
        vraag: "Wie schilderde de 'Mona Lisa'?",
        antwoorden: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        juisteAntwoord: "Leonardo da Vinci"
    }
];

function Quiz() {
    const [huidigeVraag, setHuidigeVraag] = useState(0);
    const [score, setScore] = useState(0);

    function controleerAntwoord(antwoord) {
        if (antwoord === vragen[huidigeVraag].juisteAntwoord) {
            setScore(score + 1);
        }
        setHuidigeVraag(huidigeVraag + 1);
    }

    function isQuizAfgelopen() {
        return huidigeVraag >= vragen.length;
    }

    return (

        <div className='Quiz'>
            <div className="overlay">
                <div className="content">
        <div className="quiz-container">
            {isQuizAfgelopen() ? (
                <div className="resultaat-container">
                    <p>
                        <h2>Je hebt {score} van de {vragen.length} vragen goed beantwoord!</h2>
                    </p>
                </div>
            ) : (
                <>
                    <h2>{vragen[huidigeVraag].vraag}</h2>
                    <div className="antwoorden-container">
                        {vragen[huidigeVraag].antwoorden.map((antwoord, index) => (
                            <button key={index} onClick={() => controleerAntwoord(antwoord)}>
                                {antwoord}
                            </button>
                        ))}
                    </div>
                    <p>
                        Vraag {huidigeVraag + 1} van {vragen.length}
                    </p>
                    <p>Score: {score}</p>
                </>
            )}
        </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;