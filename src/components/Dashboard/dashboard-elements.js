import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  width: auto;
  background-size: cover;
  background: #9DB17C;
`;

export const DashboardText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
`;

export const LogoutButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
color: #ffffff;
border: 2px solid #9DB17C;
/* border-radius: 40px 40px 40px 40px; */
border-radius: 10px;
-webkit-box-shadow: 10px 6px 15px -3px rgba(0,0,0,0.5); 
box-shadow: 10px 6px 15px -3px rgba(0,0,0,0.5);

&:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color: #9CDE9F;
    }
`
export const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: red;
`;
