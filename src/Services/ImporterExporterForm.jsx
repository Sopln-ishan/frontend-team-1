import { useState } from "react";
import "../Styles/ImporterExporter.css"
export default function ImporterExporterForm() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    mobileNumber: "",
    countryCode: "+1",
    importExportType: "",
    productDescription: "",
    hsCode: "",
    originCountry: "",
    destinationCountry: "",
    customsBrokerRequired: "",
    additionalDetails: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="import-export-container">
      {/* Image & Title Section */}
      <div className="import-export-header">
        <img src="/import-export.jpg" alt="Import Export Service" className="import-export-image" />
        <h2 className="import-export-title">Importer/Exporter on Records</h2>
        <p className="import-export-description">
          Rely on our certified service to navigate complex international trade regulations with ease.
          We manage all compliance requirements, ensuring smooth and secure market entry for your goods.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="import-export-form">
        {/* Client Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Client Information</legend>
          <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="input-field" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field" />
          <div className="phone-group">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange} required className="select-field">
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              <option value="+971">+971 (UAE)</option>
            </select>
            <input type="tel" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required className="input-field" />
          </div>
        </fieldset>

        {/* Service-Related Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Service Details</legend>
          <select name="importExportType" value={formData.importExportType} onChange={handleChange} required className="select-field">
            <option value="">Select Import/Export Type</option>
            <option value="Importer on Record">Importer on Record</option>
            <option value="Exporter on Record">Exporter on Record</option>
          </select>
          <input type="text" name="productDescription" placeholder="Product Description" value={formData.productDescription} onChange={handleChange} required className="input-field" />
          <input type="text" name="hsCode" placeholder="HS Code" value={formData.hsCode} onChange={handleChange} required className="input-field" />
          <input type="text" name="originCountry" placeholder="Country of Origin" value={formData.originCountry} onChange={handleChange} required className="input-field" />
          <input type="text" name="destinationCountry" placeholder="Destination Country" value={formData.destinationCountry} onChange={handleChange} required className="input-field" />
          <select name="customsBrokerRequired" value={formData.customsBrokerRequired} onChange={handleChange} required className="select-field">
            <option value="">Do you require a Customs Broker?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <textarea name="additionalDetails" placeholder="Additional Details (if any)" value={formData.additionalDetails} onChange={handleChange} className="textarea-field"></textarea>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
}
