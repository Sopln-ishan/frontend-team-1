import React, { useState } from "react";

const BondedMovementsForm = () => {
  const [formData, setFormData] = useState({ bondedType: "", numberOfVehicles: "", securityRequirements: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bonded Movements Form Data:", formData);
  };

  return (
    <div className="our-services-form">
      <form onSubmit={handleSubmit}>
        <h3>Bonded Movements</h3>
        <label>Bonded Type:</label>
        <input type="text" name="bondedType" value={formData.bondedType} onChange={handleChange} />

        <label>Number of Vehicles:</label>
        <input type="number" name="numberOfVehicles" value={formData.numberOfVehicles} onChange={handleChange} />

        <label>Security Requirements:</label>
        <textarea name="securityRequirements" value={formData.securityRequirements} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BondedMovementsForm;
