import React from 'react';
import fire from './firebase';
import GlobalStyle from '../globalStyles';
import Home from '../pages/HomePage/Home';
import FHAD from '../pages/Products/Products';
import SignUp from '../pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop'
import Navbar from "../components/Navbar/Navbar"
class Logout extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Router>
       <GlobalStyle />
       <ScrollToTop />
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/FHAD' component={FHAD} />
         <Route path='/sign-up' component={SignUp} />
       </Switch>
     </Router>
      // <div style={{textAlign: 'center'}}>
      //   <h1>You Are Logged In</h1>
      //   <input className="btn solid" type="submit" value="Logout" onClick={this.logout} />
      // </div>
    )
  }
}

export default Logout;