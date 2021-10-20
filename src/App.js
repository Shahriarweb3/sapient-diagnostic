import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Appointment from './components/ScheduleAppointment/Appointment';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import TestDetail from './components/TestDetail/TestDetail';
import NoRoute from './components/NoRoute/NoRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/test/:testid">
              <TestDetail></TestDetail>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="*">
              <NoRoute></NoRoute>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
