import { useState } from "react";
import styled from "styled-components";

const StyledServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 7px solid #007bff;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    font-size: 2rem;
    color: #333;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.5rem;
    color: #666;
    margin: 0.5rem 0;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  .edit-input {
    margin: 0.5rem 0;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }

  @media (max-width: 400px) {
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 0.9rem;
    }

    .edit-input {
      font-size: 0.9rem;
    }
  }
`;

function ServiceItem({ service, updateService, deleteService }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedService, setEditedService] = useState(service);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedService({ ...editedService, [name]: value });
  };

  const handleSave = () => {
    if (
      !editedService.name ||
      !editedService.description ||
      !editedService.price
    ) {
      alert("All fields must be filled out!");
      return;
    }
    updateService(editedService);
    setIsEditing(false);
  };

  return (
    <StyledServiceItem>
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            name="name"
            value={editedService.name}
            onChange={handleInputChange}
          />
          <input
            className="edit-input"
            type="text"
            name="description"
            value={editedService.description}
            onChange={handleInputChange}
          />
          <input
            className="edit-input"
            type="number"
            name="price"
            value={editedService.price}
            onChange={handleInputChange}
          />
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>₹{service.price}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteService(service.id)}>Delete</button>
          </div>
        </>
      )}
    </StyledServiceItem>
  );
}

export default ServiceItem;
