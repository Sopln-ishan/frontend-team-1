import { useState } from "react";

export default function ImporterExporterForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    countryOfImport: "",
    countryOfExport: "",
    hsCode: "",
    goodsDescription: "",
    complianceDocuments: "",
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
      <h2 className="text-center text-xl font-bold text-gray-700 mb-4">Importer/Exporter on Records</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="input-field" />
        <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="input-field" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="input-field" />
        <input type="text" name="countryOfImport" placeholder="Country of Import" value={formData.countryOfImport} onChange={handleChange} required className="input-field" />
        <input type="text" name="countryOfExport" placeholder="Country of Export" value={formData.countryOfExport} onChange={handleChange} required className="input-field" />
        <input type="text" name="hsCode" placeholder="HS Code (if applicable)" value={formData.hsCode} onChange={handleChange} className="input-field" />
        <textarea name="goodsDescription" placeholder="Description of Goods" value={formData.goodsDescription} onChange={handleChange} required className="textarea-field"></textarea>
        <input type="file" name="complianceDocuments" onChange={handleChange} className="input-field" />
        <textarea name="additionalInfo" placeholder="Additional Instructions" value={formData.additionalInfo} onChange={handleChange} className="textarea-field"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit Request</button>
      </form>
    </div>
  );
}
