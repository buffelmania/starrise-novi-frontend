import React, {useState} from "react";
import SolarEclipse from "../assets/jongsun-lee-F-pSZO_jeE8-unsplash.jpg";
import '../components/WistJeDat/WistJeDat_Styles.css'
import Modal from "../components/WistJeDat/Modal/Modal"


const elements = [
    { id: 1, title: "Element 1", inhoud: "Dit is een test",  content: "Dit is de inhoud van Element 1." },
    { id: 2, title: "Element 2", content: "Dit is de inhoud van Element 2." },
    { id: 3, title: "Element 3", content: "Dit is de inhoud van Element 3." }
];

const Wist = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    const handleClose = () => {
        setShowModal(false);
        setSelectedElement(null)
    };

    const handleOpenModal = (element) => {
        setSelectedElement(element);
        setShowModal(true);
    };





    return (
        <div className='Wist'>

            <div className="overlay">
            <img className="img" src={SolarEclipse} alt=""/>
                <div className="content">

                    {elements.map((element) => (
                        <div key={element.id}>
                            <h2>{element.title}</h2>
                            <p>{element.inhoud}</p>
                            <button onClick={() => handleOpenModal(element)}>Open Modal</button>
                        </div>
                    ))}
                    {selectedElement && (
                        <Modal showModal={showModal} handleClose={handleClose}>
                            <h2>{selectedElement.title}</h2>
                            <p>{selectedElement.content}</p>
                        </Modal>
                    )}
                    {/*<div className="grid-container">
                       <div className="grid-item item1">
                            <h3>Wist je dat?
                            <p>De maan steeds verder van de aarde gaat?
                            Hierdoor zal in de toekomst de zon niet
                            meer volledig verduisterd kunnen worden.</p></h3>
                        </div>
                        <div className="grid-item item2"><h3>Wist je dat?
                            <p>De zon in vergelijking met veel andere sterren
                            maar een hele gemiddelde ster is? En toch is de Zon
                            maar liefst 1.300.000 keer groter dan de aarde</p></h3></div>
                        <div className="grid-item item3"><h3>Wist je dat?
                            <p>De maan heel vroeger veel dichterbij de aarde stond? De maan
                            is eigenlijk te groot voor de aarde om in een baan om de Aarde
                            te blijven, daarom gaat de maan steeds verder weg van de Aarde.</p></h3></div>
                        <div className="grid-item item4"><h3>Wist je dat?
                            <p>Als de Maan opkomt, je vaak ook Venus kunt zien? Venus is met het blote oog
                            te zien als een felle fonkelende ster die net boven de Horizon staat.</p></h3></div>
                        <div className="grid-item item5"><h3>Wist je dat?
                            <p>Als de Zon aan de ene kant van de Aarde staat en Maan precies aan de andere kant,
                            je dan springtij hebt? Door de aantrekkingskracht van zowel de Zon als de Maan
                            wordt het water ophoog gestuwd en krijg je springtij. Dit was een van de oorzaken
                            van de watersnoodramp in 1953.</p></h3></div>
                        <div className="grid-item item6"><h3>Wist je dat?
                            <p>De maan ook ronddraait? Wij zien alleen telkens dezelfde kant van de maan omdat de
                            rotatiesnelheid van de maan precies gelijk loopt met snelheid van de baan om de Aarde.</p></h3></div>
                    </div>*/}


                </div>

            </div>




        </div>
    );
}

export default Wist;