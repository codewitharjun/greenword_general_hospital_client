import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Appoint from './Pages/Home/Appoint/Appoint';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PriverRoute from './Pages/Login/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
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
