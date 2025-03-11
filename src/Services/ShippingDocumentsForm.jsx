// src/components/ShippingDocumentsForm.js
import React, { useState } from "react";

const ShippingDocumentsForm = () => {
  const [formData, setFormData] = useState({ documentType: "", shipmentId: "", additionalNotes: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Documents Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Shipping Documents</h3>
      <label>Document Type:</label>
      <input type="text" name="documentType" value={formData.documentType} onChange={handleChange} />

      <label>Shipment ID:</label>
      <input type="text" name="shipmentId" value={formData.shipmentId} onChange={handleChange} />

      <label>Additional Notes:</label>
      <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ShippingDocumentsForm;
