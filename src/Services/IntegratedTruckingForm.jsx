import { useState } from "react";

export default function TruckingSolutionForms() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
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
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Integrated Trucking Solution</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <h3 className="text-lg font-semibold">Pickup & Delivery Details</h3>
        <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="deliveryLocation" placeholder="Delivery Location" value={formData.deliveryLocation} onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <h3 className="text-lg font-semibold">Cargo & Trucking Details</h3>
        <input type="text" name="cargoType" placeholder="Cargo Type (e.g., perishable, fragile)" value={formData.cargoType} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="cargoWeight" placeholder="Cargo Weight (in kg)" value={formData.cargoWeight} onChange={handleChange} required className="w-full p-2 border rounded" />
        <select name="truckType" value={formData.truckType} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Select Truck Type</option>
          <option value="Flatbed">Flatbed</option>
          <option value="Refrigerated">Refrigerated</option>
          <option value="Containerized">Containerized</option>
          <option value="Tanker">Tanker</option>
        </select>
        <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required className="w-full p-2 border rounded" />
        
        <textarea name="specialInstructions" placeholder="Special Instructions (if any)" value={formData.specialInstructions} onChange={handleChange} className="w-full p-2 border rounded min-h-[80px]"></textarea>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Request</button>
      </form>
    </div>
  );
}