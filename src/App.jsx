import { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import Logo from "./components/Logo";
import styled from "styled-components";
import Footer from "./components/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "Routine health check-up",
      price: 100,
    },
    {
      id: 2,
      name: "Blood Test",
      description: "Complete blood count test",
      price: 50,
    },
    {
      id: 3,
      name: "X-Ray",
      description: "Radiology imaging service",
      price: 150,
    },
  ]);

  // Add a new service
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
    console.log(services);
  };

  // Update an existing service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  // Delete a service
  const deleteService = (id) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service.id !== id)
    );
  };

  return (
    <>
      <StyledDiv>
        <Logo />
        <ServiceForm
          addService={addService}
          setServices={setServices}
          services={services}
        />
        <ServiceList
          services={services}
          updateService={updateService}
          deleteService={deleteService}
        />
        <Footer />
      </StyledDiv>
    </>
  );
}

export default App;
