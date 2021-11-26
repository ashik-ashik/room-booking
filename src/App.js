import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import Login from './pages/Authentication/Login/Login';
import NotFound from './pages/Shared/NotFound/NotFound';
import firebaseAuthInit from './firebase/firebase-init/firebase.init';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './pages/Authentication/Register/Register';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import RoomDetails from './pages/RoomDetails/RoomDetails';
import Booking from './pages/Booking/Booking';
import AddNewService from './pages/AddNewService/AddNewService';
import UpdateBooking from './pages/UpdateBooking/UpdateBooking';

firebaseAuthInit();


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
      
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path='/roomdetails/:roomId'>
              <RoomDetails></RoomDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/manage-booking'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path='/addnew'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute exact path='/update/booking/:id'>
              <UpdateBooking></UpdateBooking>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register" title="About Page">
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
