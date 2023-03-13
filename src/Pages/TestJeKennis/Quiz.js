import React, { useState } from "react";
import "./QuizStyles.css";
import vragen from "./Questions/Questions";

function Quiz() {
    const [huidigeVraag, setHuidigeVraag] = useState(0);
    const [score, setScore] = useState(0);
    const [aantalSpelers, setAantalSpelers] = useState(0);
    const [spelerNamen, setSpelerNamen] = useState(["Speler 1", "Speler 2"]);
    const [speler1Score, setSpeler1Score] = useState(0);
    const [speler2Score, setSpeler2Score] = useState(0);

    function controleerAntwoord(antwoord) {
        const currentPlayer = huidigeVraag % 2 === 0 ? 0 : 1;
        if (antwoord === vragen[huidigeVraag].juisteAntwoord) {
            if (currentPlayer === 0) {
                setSpeler1Score(speler1Score + 1);
            } else {
                setSpeler2Score(speler2Score + 1);
            }
            setScore(score + 1);
        }
        setHuidigeVraag(huidigeVraag + 1);
    }

    function isQuizAfgelopen() {
        return huidigeVraag >= vragen.length;
    }

    function updateSpelerNamen(e, index) {
        const newNames = [...spelerNamen];
        newNames[index] = e.target.value;
        setSpelerNamen(newNames);
    }

    function startQuiz(e) {
        e.preventDefault();
        const selectedAantalSpelers = parseInt(e.target.aantalSpelers.value);
        setAantalSpelers(selectedAantalSpelers);
        if (selectedAantalSpelers === 2) {
            setSpelerNamen([
                e.target.Speler1.value || "Speler 1",
                e.target.Speler2.value || "Speler 2"
            ]);
        } else {
            setSpelerNamen([e.target.Speler1.value || "Speler 1"]);
        }
    }

    return (
        <div className="Quiz">
            {aantalSpelers === 0 && (
                <form onSubmit={startQuiz}>
                    <h2>Kies het aantal spelers:</h2>
                    <label htmlFor="radio-1">
                        <input id="radio-1" type="radio" name="aantalSpelers" value="1" />
                        1 speler
                    </label>
                    <label htmlFor="radio-2">
                        <input id="radio-2" type="radio" name="aantalSpelers" value="2" />
                        2 spelers
                    </label>
                    <button type="submit">Start Quiz</button>
                </form>
            )}

            {aantalSpelers !== 0 && (
                <div className="overlay">
                    <div className="content">
                        <div className="quiz-container">
                            {isQuizAfgelopen() ? (
                                <div className="resultaat-container">
                                    {aantalSpelers === 1 ? (
                                        <p>
                                            <h2>
                                                {spelerNamen[0]} heeft {score} van de {vragen.length} vragen goed beantwoord!
                                            </h2>
                                        </p>
                                    ) : (
                                        <div>
                                            <h2>
                                                {spelerNamen[0]} heeft {speler1Score} van de {vragen.length} vragen goed beantwoord!
                                            </h2>
                                        <h2>
                                            {spelerNamen[1]} heeft {speler2Score} van de {vragen.length} vragen goed beantwoord!
                                        </h2>
                                    </div>
                                )}
                                {aantalSpelers === 1 && (
                                    <h2>
                                        {spelerNamen[0]} heeft {speler1Score} van de {vragen.length} vragen goed beantwoord!
                                    </h2>
                                )}
                            </div>
                        ) : (
                            <>
                                {aantalSpelers === 1 ? (
                                    <div>
                                        <h2>{vragen[huidigeVraag].vraag}</h2>
                                        <div className="antwoorden-container">
                                            {vragen[huidigeVraag].antwoorden.map((antwoord, index) => (
                                                <button key={index} onClick={() => controleerAntwoord(antwoord)}>
                                                    {antwoord}
                                                </button>
                                            ))}
                                        </div>
                                        <p>
                                            <h3>Vraag {huidigeVraag + 1} van {vragen.length}</h3>
                                        </p>
                                        <p>
                                            <h3>Score: {score}</h3>
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        {aantalSpelers === 2 && (
                                            <>
                                                <h2>{spelerNamen[0]}: {speler1Score} van de {vragen.length} vragen goed beantwoord!</h2>
                                                <h2>{spelerNamen[1]}: {speler2Score} van de {vragen.length} vragen goed beantwoord!</h2>
                                            </>
                                        )}
                                        <h2>{vragen[huidigeVraag].vraag}</h2>
                                        <div className="antwoorden-container">
                                            {vragen[huidigeVraag].antwoorden.map((antwoord, index) => (
                                                <button key={index} onClick={() => controleerAntwoord(antwoord)}>
                                                    {antwoord}
                                                </button>
                                            ))}
                                        </div>
                                        <p>
                                            <h3>Vraag {huidigeVraag + 1} van {vragen.length}</h3>
                                        </p>
                                        <div>
                                            <label>
                                                {spelerNamen[0]}'s Score: {huidigeVraag % 2 === 0 ? speler1Score : speler2Score}
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                {spelerNamen[1]}'s Score: {huidigeVraag % 2 === 0 ? speler2Score : speler1Score}
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                        <div className="config-container">
                            <div>
                                <h2>Speler namen</h2>
                                {spelerNamen.length < 2 ? (
                                    <div>
                                        <label>Speler 1</label>
                                        <input type="text" value={spelerNamen[0]} onChange={(e) => updateSpelerNamen(e, 0)} />
                                    </div>
                                ) : (
                                    spelerNamen.map((naam, index) => (
                                        <div key={index}>
                                            <label>Speler {index + 1}</label>
                                            <input type="text" value={naam} onChange={(e) => updateSpelerNamen(e, index)} />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                </div>
            </div>)}
        </div>
    );
}

export default Quiz;