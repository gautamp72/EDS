import React from "react";
import "./css/Modal.css";

const Modal = ({ service, closeModal }) => {
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>{service.Name}</h2>
          <p>{service.Description}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
