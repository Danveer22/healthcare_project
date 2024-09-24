import styled from "styled-components";
import ServiceItem from "./ServiceItem";

const StyledServiceList = styled.div`
  flex-grow: 2;
  padding: 2rem;
  width: 120rem;
  border-radius: 10px;
  max-height: 80vh;
  overflow-y: auto;
  margin: 2rem 0;
  align-self: center;
  margin-top: 4rem;

  h2 {
    font-size: 2.5rem;
    color: #007bff;
    text-align: center;
    margin-bottom: 2rem;
  }
  @media (max-width: 400px) {
    padding: 0.5rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

function ServiceList({ services, updateService, deleteService }) {
  return (
    <StyledServiceList>
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          updateService={updateService}
          deleteService={deleteService}
        />
      ))}
    </StyledServiceList>
  );
}

export default ServiceList;
