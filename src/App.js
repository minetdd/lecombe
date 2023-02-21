import React, { Component, Fragment } from 'react';
import NavBar from './app/NavBar';

// import { Route } from 'react-router-dom';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core'
// import CssBaseline from '@material-ui/core/CssBaseline';
// import NavBar from './Components/NavBar';
// import Home from './Components/Home';
// import Services from './Components/Services';
// import Specials from './Components/Specials';
// import Products from './Components/Products';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// import Theme from './Theme';
// import Logo from './Assets/pshav4.png'

class App extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        {/* <div className={classes.content}>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/specials" component={Specials} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
        </div> */}
      </Fragment>
    );
  }
}

export default App;
