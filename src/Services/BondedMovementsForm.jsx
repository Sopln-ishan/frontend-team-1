import { useState } from "react";
import "../Styles/BondedMovements.css";

export default function BondedMovementsForm() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    mobile: "",
    pickupLocation: "",
    deliveryLocation: "",
    bondedWarehouse: "",
    customsClearance: "",
    cargoType: "",
    cargoWeight: "",
    truckType: "",
    estimatedDelivery: "",
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
    <section className="bonded-movements-container">
      {/* Image & Title Section */}
      <header className="bonded-movements-header">
        <img
          src="/bonded-movements.jpg"
          alt="Bonded Movements"
          className="bonded-movements-image"
        />
        <h2 className="bonded-movements-title">Bonded Movements</h2>
        <p className="bonded-movements-description">
          Our bonded movement services keep your cargo under secure customs
          control from origin to destination. Benefit from streamlined processes
          that delay duty payments until your goods are cleared, optimizing cash
          flow and efficiency.
        </p>
      </header>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bonded-movements-form">
        {/* Client Information */}
        <fieldset className="form-section">
          <legend className="form-section-title">Client Information</legend>
          <label>
            Contact Person:
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
        </fieldset>

        {/* Service Details */}
        <fieldset className="form-section">
          <legend className="form-section-title">Bonded Movements</legend>
          <label>
            Pickup Location:
            <input
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Delivery Location:
            <input
              type="text"
              name="deliveryLocation"
              placeholder="Delivery Location"
              value={formData.deliveryLocation}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Bonded Warehouse Location:
            <input
              type="text"
              name="bondedWarehouse"
              placeholder="Bonded Warehouse Location"
              value={formData.bondedWarehouse}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Customs Clearance Required?
            <select
              name="customsClearance"
              value={formData.customsClearance}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            Cargo Type:
            <input
              type="text"
              name="cargoType"
              placeholder="Cargo Type (e.g., Electronics, Chemicals)"
              value={formData.cargoType}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Cargo Weight (kg):
            <input
              type="number"
              name="cargoWeight"
              placeholder="Cargo Weight (in kg)"
              value={formData.cargoWeight}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Select Truck Type:
            <select
              name="truckType"
              value={formData.truckType}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select</option>
              <option value="Flatbed">Flatbed</option>
              <option value="Refrigerated">Refrigerated</option>
              <option value="Containerized">Containerized</option>
              <option value="Tanker">Tanker</option>
            </select>
          </label>
          <label>
            Estimated Delivery Date & Time:
            <input
              type="datetime-local"
              name="estimatedDelivery"
              value={formData.estimatedDelivery}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <label>
            Special Instructions:
            <textarea
              name="specialInstructions"
              placeholder="Special Instructions (if any)"
              value={formData.specialInstructions}
              onChange={handleChange}
              className="textarea-field"
            ></textarea>
          </label>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>
    </section>
  );
}
