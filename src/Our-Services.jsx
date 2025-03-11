import { useState } from "react";
import BondedMovementsForm from "./Services/BondedMovementsForm";
import BorderClearancesForm from "./Services/BorderClearancesForm";
import ImporterExporterForm from "./Services/ImporterExporterForm";
import IntegratedTruckingForm from "./Services/IntegratedTruckingForm";
import ProjectCargoForm from "./Services/ProjectCargoForm";
import ShippingDocumentsForm from "./Services/ShippingDocumentsForm";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState("Integrated Trucking");

  const renderForm = () => {
    switch (selectedService) {
      case "Integrated Trucking":
        return <IntegratedTruckingForm />;
      case "Importer/Exporter":
        return <ImporterExporterForm />;
      case "Bonded Movements":
        return <BondedMovementsForm />;
      case "Shipping Documents":
        return <ShippingDocumentsForm />;
      case "Border Clearances":
        return <BorderClearancesForm />;
      case "Project Cargo":
        return <ProjectCargoForm />;
      default:
        return <IntegratedTruckingForm />;
    }
  };

  return (
    <div>
      <h2>Our Services</h2>
      <div>
        {["Integrated Trucking", "Importer/Exporter", "Bonded Movements", "Shipping Documents", "Border Clearances", "Project Cargo"].map((service) => (
          <button key={service} onClick={() => setSelectedService(service)}>
            {service}
          </button>
        ))}
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default OurServices;
