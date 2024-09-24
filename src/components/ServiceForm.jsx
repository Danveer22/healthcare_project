import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #f0f4f8;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-width: 800px;
  margin: 3rem auto;

  @media (max-width: 400px) {
    padding: 1rem;
    width: 80%;
    background-color: green;
    max-width: 100%;
  }
`;

const StyledHeading = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: all 0.3s ease-out;

  &::placeholder {
    color: #aaa;
    font-family: inherit;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

function ServiceForm({ addService }) {
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.price) {
      alert("All fields must be filled out.");
      return;
    }
    addService(newService);
    setNewService({ name: "", description: "", price: "" });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add Your Services 🆕</StyledHeading>
      <StyledInput
        type="text"
        name="name"
        placeholder="Service Name"
        value={newService.name}
        onChange={handleChange}
      />
      <StyledInput
        type="text"
        name="description"
        placeholder="Description"
        value={newService.description}
        onChange={handleChange}
      />
      <StyledInput
        type="number"
        name="price"
        placeholder="Price"
        value={newService.price}
        onChange={handleChange}
      />
      <StyledButton type="submit">Add Service</StyledButton>
    </StyledForm>
  );
}

export default ServiceForm;
