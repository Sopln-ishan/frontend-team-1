import { useState } from "react";

const IntegratedTruckingForm = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    cargoType: ""
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
      <h3>Integrated Trucking Solution</h3>
      <label>Pickup Location:</label>
      <input type="text" name="pickup" value={formData.pickup} onChange={handleChange} />

      <label>Drop-off Location:</label>
      <input type="text" name="dropoff" value={formData.dropoff} onChange={handleChange} />

      <label>Cargo Type:</label>
      <input type="text" name="cargoType" value={formData.cargoType} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default IntegratedTruckingForm;
