import React from "react";
import "./css/CreateService.css";

const CreateServices = () => {
  return (
    <div>
      <form>
        <h2>Service Details</h2>

        <label>Service Name</label>
        <input
          type="text"
          id="service-name"
          name="serviceName"
          placeholder="Enter service name"
        />

        <label>Service Description</label>
        <input
          type="text"
          id="service-description"
          name="serviceDescription"
          placeholder="Enter service description"
        />

        <label>Service Icon</label>
        <input
          type="text"
          id="service-icon"
          name="serviceIcon"
          placeholder="Enter service icon (e.g., fa-user)"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateServices;
