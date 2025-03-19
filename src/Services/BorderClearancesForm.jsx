import { useState } from "react";
import "../Styles/BondedClearances.css";

export default function BorderClearancesForm() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    mobile: "",
    pickupLocation: "",
    deliveryLocation: "",
    customsAgency: "",
    requiredClearances: "",
    urgencyLevel: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="border-clearance-container">
      {/* Image & Title Section */}
      <div className="border-clearance-header">
        <img src="/border-clearance.jpg" alt="Border Clearance" className="border-clearance-image" />
        <h2 className="border-clearance-title">Border Clearances</h2>
        <p className="border-clearance-description">
          Our border clearance solutions simplify the complexities of cross-border logistics by efficiently managing inspections and documentation.
          We work diligently to expedite clearance, reducing delays and ensuring timely delivery.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="border-clearance-form">
        {/* Client Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Client Information</legend>
          <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="input-field" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field" />
          <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required className="input-field" />
        </fieldset>

        {/* Service-Related Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Service Details</legend>
          <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required className="input-field" />
          <input type="text" name="deliveryLocation" placeholder="Delivery Location" value={formData.deliveryLocation} onChange={handleChange} required className="input-field" />
          <input type="text" name="customsAgency" placeholder="Customs Agency (if applicable)" value={formData.customsAgency} onChange={handleChange} className="input-field" />
          <input type="text" name="requiredClearances" placeholder="Required Clearances (e.g., Import, Export, Health & Safety)" value={formData.requiredClearances} onChange={handleChange} required className="input-field" />
          <select name="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange} required className="input-field">
            <option value="">Urgency Level</option>
            <option value="Standard">Standard</option>
            <option value="Expedited">Expedited</option>
            <option value="Urgent">Urgent</option>
          </select>
          <textarea name="specialInstructions" placeholder="Special Instructions (if any)" value={formData.specialInstructions} onChange={handleChange} className="textarea-field"></textarea>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
}
