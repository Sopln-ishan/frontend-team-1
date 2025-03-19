import { useState } from "react";

export default function IntegratedTruckingForm() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    mobileNumber: "",
    countryCode: "",
    pickupLocation: "",
    deliveryLocation: "",
    cargoType: "",
    cargoWeight: "",
    truckType: "",
    deliveryDate: "",
    specialInstructions: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="trucking-container">
      {/* Image & Title Section */}
      <div className="trucking-header">
        <img src="/trucking-image.jpg" alt="Trucking Service" className="trucking-image" />
        <h2 className="trucking-title">Integrated Trucking Solution</h2>
        <p className="trucking-description">
          Experience seamless transportation with optimized fleet management and secure delivery schedules.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="trucking-form">
        {/* Client Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Client Information</legend>
          <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="input-field" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field" />
          <div className="phone-group">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange} required className="select-field">
              <option value="">Select Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              <option value="+61">+61 (Australia)</option>
            </select>
            <input type="tel" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required className="input-field" />
          </div>
        </fieldset>

        {/* Service-Related Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Service Details</legend>
          <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required className="input-field" />
          <input type="text" name="deliveryLocation" placeholder="Delivery Location" value={formData.deliveryLocation} onChange={handleChange} required className="input-field" />
          <input type="text" name="cargoType" placeholder="Cargo Type (e.g., perishable, fragile)" value={formData.cargoType} onChange={handleChange} required className="input-field" />
          <input type="number" name="cargoWeight" placeholder="Cargo Weight (in kg)" value={formData.cargoWeight} onChange={handleChange} required className="input-field" />
          <select name="truckType" value={formData.truckType} onChange={handleChange} required className="select-field">
            <option value="">Select Truck Type</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Containerized">Containerized</option>
            <option value="Tanker">Tanker</option>
          </select>
          <input type="datetime-local" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required className="input-field" />
          <textarea name="specialInstructions" placeholder="Special Instructions (if any)" value={formData.specialInstructions} onChange={handleChange} className="textarea-field"></textarea>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
}
