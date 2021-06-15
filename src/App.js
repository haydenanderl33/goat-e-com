import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import SignUp from "./components/Sign-Up/signup-index";
import Dashboard from "./components/Dashboard/dashboard-index";
import Login from "./components/Login/login-index";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
