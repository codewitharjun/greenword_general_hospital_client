import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import NavContact from './Pages/NavContact/NavContact';
import Footer from './Pages/Footer/Footer';
import Appoint from './Pages/Home/Appoint/Appoint';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PriverRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Careers from './Pages/Careers/Careers';
import About from './Pages/Home/About/About';
import './App.css';  

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavContact></NavContact>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/careers">
              <Careers></Careers>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PriverRoute path="/appoint/:appointId">
              <Appoint></Appoint>
            </PriverRoute>
            <Route path="/login">
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
