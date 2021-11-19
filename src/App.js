import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Collection from "./Pages/Collection/Collection";
import Login from "./Pages/Login/Login/Login";
import Contact from "./Pages/Contact/Contact";
import Purchase from "./Pages/Login/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import NotFound from "./Pages/NotFound/NotFound";
import AllLamps from "./Pages/AllLamps/AllLamps";
import Vision from "./Pages/Vision/Vision";
import World from "./Pages/World/World";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/collection">
              <Collection></Collection>
            </Route>
            <Route path="/alllamps">
              <AllLamps></AllLamps>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/vision">
              <Vision></Vision>
            </Route>
            <Route path="/world">
              <World></World>
            </Route>

            <PrivateRoute path="/purchase/:serviceId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/resetPassword">
              <ResetPassword></ResetPassword>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
