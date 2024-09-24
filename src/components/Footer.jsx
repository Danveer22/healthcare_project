import styled from "styled-components";

// Styled component for the footer
const StyledFooter = styled.footer`
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 3rem;

  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 375px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 2rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterText>
        &copy; {new Date().getFullYear()} Health Care Service. All rights
        reserved.
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;
