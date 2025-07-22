import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./css/Whatwedo.css";
import app from "./firebase";
import Modal from "./Modal";
import { getDatabase, ref, get } from "firebase/database";

const WhatWeDo = () => {
  let [servicesArray, setServicesArray] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const fetchData = async () => {
    console.log("in here");
    const db = getDatabase(app);
    const dbRef = ref(db, "EDS/Services");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setServicesArray(Object.values(snapshot.val()));
      console.log(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section class="what-we-do-section" id="services" data-aos="fade-right">
        <div class="what-we-do-container">
          <h2>Services</h2>
          <div class="cards">
            {servicesArray.map((service, index) => (
              <div
                class="card"
                key={index}
                onClick={() => handleCardClick(service)}
              >
                <div class="icon">
                  <i class={service.Icon}></i>
                </div>
                <h3>{service.Name}</h3>
                <p>{service.Description}</p>
              </div>
            ))}
          </div>
        </div>
        {showModal && selectedService && (
          <div>
            <Modal service={selectedService} closeModal={closeModal} />
          </div>
        )}
      </section>
    </div>
  );
};

export default WhatWeDo;
