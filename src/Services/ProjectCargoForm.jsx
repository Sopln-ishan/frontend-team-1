import { useState } from "react";

export default function ProjectCargoMovementsForm() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    mobile: "",
    pickupLocation: "",
    deliveryLocation: "",
    cargoType: "",
    cargoWeight: "",
    truckType: "",
    estimatedDelivery: "",
    convoyRequired: "",
    roadSafetyApproval: "",
    cidApproval: "",
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
    <div className="project-cargo-container">
      {/* Image & Title Section */}
      <div className="project-cargo-header">
        <img src="/project-cargo.jpg" alt="Project Cargo Movements" className="project-cargo-image" />
        <h2 className="project-cargo-title">Project Cargo Movements</h2>
        <p className="project-cargo-description">
          For challenging project cargo, our tailored logistics solutions handle oversized, heavy, or sensitive shipments with specialized care.
          Count on our expertise to plan and execute complex transport projects on time and within budget.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="project-cargo-form">
        {/* Client Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Client Information</legend>
          <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="input-field" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field" />
          <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required className="input-field" />
        </fieldset>

        {/* Service Details */}
        <fieldset className="form-section">
          <legend className="form-section-title">Service Details</legend>
          <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required className="input-field" />
          <input type="text" name="deliveryLocation" placeholder="Delivery Location" value={formData.deliveryLocation} onChange={handleChange} required className="input-field" />
          <input type="text" name="cargoType" placeholder="Cargo Type (e.g., Oversized, Heavy)" value={formData.cargoType} onChange={handleChange} required className="input-field" />
          <input type="number" name="cargoWeight" placeholder="Cargo Weight (in kg)" value={formData.cargoWeight} onChange={handleChange} required className="input-field" />
          <select name="truckType" value={formData.truckType} onChange={handleChange} required className="input-field">
            <option value="">Select Truck Type</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Containerized">Containerized</option>
            <option value="Tanker">Tanker</option>
          </select>
          <input type="datetime-local" name="estimatedDelivery" value={formData.estimatedDelivery} onChange={handleChange} required className="input-field" />
        </fieldset>

        {/* Sub-services */}
        <fieldset className="form-section">
          <legend className="form-section-title">Convoy Movements</legend>
          <p>Coordinated convoy movements to ensure efficient, secure group transport.</p>
          <select name="convoyRequired" value={formData.convoyRequired} onChange={handleChange} required className="input-field">
            <option value="">Is a convoy required?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </fieldset>

        <fieldset className="form-section">
          <legend className="form-section-title">Road Safety Approvals</legend>
          <p>We secure essential road safety approvals for compliant, safe journeys.</p>
          <select name="roadSafetyApproval" value={formData.roadSafetyApproval} onChange={handleChange} required className="input-field">
            <option value="">Road Safety Approval Required?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </fieldset>

        <fieldset className="form-section">
          <legend className="form-section-title">CID Approvals</legend>
          <p>Our team streamlines CID approvals for quick, on-schedule cargo movement.</p>
          <select name="cidApproval" value={formData.cidApproval} onChange={handleChange} required className="input-field">
            <option value="">CID Approval Required?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </fieldset>

        {/* Special Instructions */}
        <fieldset className="form-section">
          <legend className="form-section-title">Special Instructions</legend>
          <textarea name="specialInstructions" placeholder="Special Instructions (if any)" value={formData.specialInstructions} onChange={handleChange} className="textarea-field"></textarea>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
}
