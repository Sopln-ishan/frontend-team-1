import { useState } from "react";

export default function BorderClearanceForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    shipmentDetails: "",
    borderCrossingPoint: "",
    customsBroker: "",
    requiredDocuments: "",
    inspectionRequirements: "",
    additionalInfo: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">Border Clearance Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="shipmentDetails" placeholder="Shipment Details" value={formData.shipmentDetails} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
        <input type="text" name="borderCrossingPoint" placeholder="Border Crossing Point" value={formData.borderCrossingPoint} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="customsBroker" placeholder="Customs Broker (if any)" value={formData.customsBroker} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="requiredDocuments" placeholder="Required Documents" value={formData.requiredDocuments} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="inspectionRequirements" placeholder="Inspection Requirements" value={formData.inspectionRequirements} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        <textarea name="additionalInfo" placeholder="Additional Instructions" value={formData.additionalInfo} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Request</button>
      </form>
    </div>
  );
}