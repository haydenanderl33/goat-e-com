import { useRef, useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext";
import {
  SignUpContainer,
  SignUpWrapper,
  SignupBox,
  SignUpTitleWrapper,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  Error,
} from "./signup-elements";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory()

  const { signup, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard")
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <SignUpContainer>
        <SignUpWrapper>
          <SignupBox>
              {currentUser?.email}
            {error && <Error>{error}</Error>}
            <SignUpForm onSubmit={handleSubmit}>
              <SignUpTitleWrapper>Sign Up Here</SignUpTitleWrapper>
              <SignUpInput
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
                autocomplete="off"
                required
              />
              <SignUpInput
                id="password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                autocomplete="off"
                required
              />
              <SignUpInput
                type="password"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                autocomplete="off"
              />
              <SignUpButton
                onClick={handleSubmit}
                type="submit"
                disabled={loading}
              >
                Sign Up
              </SignUpButton>
            </SignUpForm>
          </SignupBox>
            <Link to='/login' style={{'color': 'white', marginTop: '24px'}}>Have an account?</Link>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
