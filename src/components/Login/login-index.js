import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LoginContainer,
  LoginWrapper,
  LoginBox,
  LoginTitleWrapper,
  LoginForm,
  LoginInput,
  LoginButton,
  Error,
} from "./login-elements";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      history.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginBox>
            {/* {currentUser?.email} */}
            {error && <Error>{error}</Error>}
            <LoginForm onSubmit={handleLogin}>
              <LoginTitleWrapper>Login Here</LoginTitleWrapper>
              <LoginInput
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
                autocomplete="off"
                required
              />
              <LoginInput
                id="password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                autocomplete="off"
                required
              />
              <LoginButton onClick={handleLogin} type="submit">
                Log In
              </LoginButton>
            </LoginForm>
          </LoginBox>
            <Link to="/signup" style={{ color: "white", marginTop: '24px' }}>
              Need an account?
            </Link>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
