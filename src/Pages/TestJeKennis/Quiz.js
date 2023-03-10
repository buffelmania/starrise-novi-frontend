import React, { useState } from "react";
import "./QuizStyles.css";
import vragen from "./Questions/Questions";
import Button from "../../components/Button/Button";


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
                        <h3>Vraag {huidigeVraag + 1} van {vragen.length}</h3>
                    </p>
                    <p><h3>Score: {score}</h3></p>
                </>
            )}
        </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;