import { useState } from "react";
import "../Styles/ShippingDocuments.css"
export default function ShippingDocumentsForm() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    mobile: "",
    pickupLocation: "",
    deliveryLocation: "",
    requiredDocuments: "",
    destinationCountry: "",
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
    <div className="shipping-docs-container">
      {/* Image & Title Section */}
      <div className="shipping-docs-header">
        <img src="/shipping-documents.jpg" alt="Shipping Documents" className="shipping-docs-image" />
        <h2 className="shipping-docs-title">Shipping Documents</h2>
        <p className="shipping-docs-description">
          We prepare all essential shipping documents precisely, from bills of lading to compliance certificates, ensuring hassle-free transit across borders.
          Trust our expertise to maintain the integrity of your paperwork, keeping your shipments on track.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="shipping-docs-form">
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
          <input type="text" name="requiredDocuments" placeholder="Required Documents (e.g., Bill of Lading, Compliance Certificate)" value={formData.requiredDocuments} onChange={handleChange} required className="input-field" />
          <input type="text" name="destinationCountry" placeholder="Destination Country" value={formData.destinationCountry} onChange={handleChange} required className="input-field" />
          <select name="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange} required className="select-field">
            <option value="">Urgency Level</option>
            <option value="Standard">Standard</option>
            <option value="Express">Express</option>
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
