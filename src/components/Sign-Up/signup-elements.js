import styled from "styled-components";

// SignUpContainer, SignupBox, SignUpForm, SignUpInput

export const SignUpContainer = styled.div`
  height: 100vh;
  width: auto;
  background-size: cover;
  background: linear-gradient(
    108deg,
    rgba(156, 222, 159, 1) 0%,
    rgba(130, 115, 92, 1)100%
  );

`;
export const SignUpWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignupBox = styled.div`
  height: 286px;
  width: 400px;
  max-width: 400px;
  background: #4b3b40;
  border-radius: 10px;
 
`;
export const SignUpTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
`;
export const SignUpForm = styled.form`
display: flex;
  justify-content: center;
  display: grid;
 grid-template-rows: repeat(5, 1fr);
`;

export const SignUpInput = styled.input`
  width: 200px;
  /* margin: 10px 0; */
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
`;

export const SignUpButtonWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
  justify-content: center;
`
export const SignUpButton = styled.div`
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
