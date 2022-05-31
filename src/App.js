import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import ClientReview from './Component/ClientReview/ClientReview';
import Contact from './Component/Contact/Contact';
import AuthProvider from './Component/Context/AuthProvider';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Help from './Component/Help/Help';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import OrderReview from './Component/OrderReview/OrderReview';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Shop from './Component/Shop/Shop';
import Wishlist from './Component/Wishlist/Wishlist';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header>
          </Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home.html">
              <Home></Home>
            </Route>
            <Route path="/shop.html">
              <Shop></Shop>
            </Route>

            <Route path="/about.html">
              <About></About>
            </Route>
            <Route path="/orderReview.html">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/placeOrder.html">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/clientReview.html">
              <ClientReview></ClientReview>
            </Route>
            {/* <Route path="/cart.html">
            <Cart></Cart>
          </Route> */}

            <Route path="/wishList.html">
              <Wishlist></Wishlist>
            </Route>

            <Route path="/blog.html">
              <Blog></Blog>
            </Route>
            <Route path="/login.html">
              <Login></Login>
            </Route>
            <Route path="/register.html">
              <Register></Register>
            </Route>
            <Route path="/privacyPolicy.html">
              <PrivacyPolicy></PrivacyPolicy>
            </Route>
            <Route path="/help.html">
              <Help></Help>
            </Route>
            <Route path="/contact.html">
              <Contact></Contact>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
