import React, {useState} from "react";
import SolarEclipse from "../../assets/jongsun-lee-F-pSZO_jeE8-unsplash.jpg";
import './WistJeDat_Styles.css'
import Modal from "../../components/Modal/Modal"
import elements from "./Elements/ElementsGridAndModal";
import Button from "../../components/Button/Button";



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
                    <div className="container">

                    {elements.map((element) => (
                        <div key={element.id}>
                            <h3>{element.title}</h3>
                            <p>{element.inhoud}</p>
                            <Button label="Meer weten?" onClick={() => handleOpenModal(element)}/>

                        </div>
                    ))}
                    {selectedElement && (
                        <Modal showModal={showModal} handleClose={handleClose}>
                            <p>{selectedElement.content}</p>
                        </Modal>
                    )}
                    </div>

                </div>

            </div>




        </div>
    );
}

export default Wist;