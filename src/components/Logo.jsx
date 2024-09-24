import styled from "styled-components";

const StyledLogo = styled.h1`
  background-color: #007bff;
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 375px) {
    font-size: 2.5rem;
    padding: 15px;
  }
`;

function Logo() {
  return <StyledLogo>🏥 Healthcare Services 💉</StyledLogo>;
}

export default Logo;
