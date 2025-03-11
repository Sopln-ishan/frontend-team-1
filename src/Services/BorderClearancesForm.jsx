import React, { useState } from "react";

const BorderClearancesForm = () => {
  const [formData, setFormData] = useState({ country: "", clearanceType: "", referenceNumber: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Border Clearances Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Border Clearances</h3>
      <label>Country:</label>
      <input type="text" name="country" value={formData.country} onChange={handleChange} />

      <label>Clearance Type:</label>
      <input type="text" name="clearanceType" value={formData.clearanceType} onChange={handleChange} />

      <label>Reference Number:</label>
      <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BorderClearancesForm;