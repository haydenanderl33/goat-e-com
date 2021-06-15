import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from 'react-router-dom'
import {
  DashboardContainer,
  DashboardText,
  LogoutButton,
  Error,
} from "./dashboard-elements";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, signout } = useAuth();

  const history = useHistory()

  const handleSignout = async () => {
      setError('')
      try{
          await signout()
          history.push('/login')
      }
      catch(err) {
        setError(err.message)
      }
  }
  return (
    <>
      <DashboardContainer>
        <DashboardText>
          Dashboard page with current user email {currentUser?.email}
          <LogoutButton onClick={signout}>Logout</LogoutButton>
          {error && <Error>{error}</Error>}
        </DashboardText>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
