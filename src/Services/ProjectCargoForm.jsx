import { useState } from "react";

export default function ProjectCargoForms() {
  return (
    <div className="space-y-12">
      <ConvoyAndSafetyForm />
      <CidApprovalForm />
    </div>
  );
}

function ConvoyAndSafetyForm() {
  const [selectedService, setSelectedService] = useState("convoy");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    convoyDetails: "",
    roadSafetyDetails: ""
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
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">Convoy Movements & Road Safety Approvals</h2>
      <label className="block text-gray-700">Select Service</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
      >
        <option value="convoy">Convoy Movements</option>
        <option value="roadSafety">Road Safety Approvals</option>
      </select>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        
        {selectedService === "convoy" && (
          <textarea name="convoyDetails" placeholder="Convoy Movement Details" value={formData.convoyDetails} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
        )}
        
        {selectedService === "roadSafety" && (
          <textarea name="roadSafetyDetails" placeholder="Road Safety Compliance Details" value={formData.roadSafetyDetails} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
        )}
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Request</button>
      </form>
    </div>
  );
}

function CidApprovalForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    cidApprovalDetails: ""
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
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">CID Approvals</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="cidApprovalDetails" placeholder="CID Approval Requirements" value={formData.cidApprovalDetails} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Request</button>
      </form>
    </div>
  );
}
