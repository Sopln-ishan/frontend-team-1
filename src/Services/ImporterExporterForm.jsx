import { useState } from "react";

const ImporterExporterForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    licenseNumber: "",
    destinationCountry: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Importer on Records / Exporter on Records</h3>
      <label>Company Name:</label>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />

      <label>Trade License Number:</label>
      <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />

      <label>Destination Country:</label>
      <input type="text" name="destinationCountry" value={formData.destinationCountry} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ImporterExporterForm;
