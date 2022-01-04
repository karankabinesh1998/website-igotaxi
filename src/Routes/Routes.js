import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from '../Screens/AboutUs/AboutUs';
import Authorization from '../Screens/Authorization/Authorization';
import Contact from '../Screens/Contact/Contact';
import PageNotFound from '../Screens/ErrorPages/PageNotFound';
import Footer from '../Screens/Footer/Footer';
import Header from '../Screens/Header/Header';
import HomePage from '../Screens/HomePage/HomePage';
import MyAccount from '../Screens/MyAccount/MyAccount';
import OurServices from '../Screens/OurServices/OurServices';
import PrivacyAndPolicy from '../Screens/PrivacyAndPolicy/PrivacyAndPolicy';


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route
        exact
        path={'/'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <HomePage {...props} />
            <Footer {...props} />
          </div>
        )}
      />
      <Route
        exact
        path={'/contact'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <Contact {...props} />
            <Footer {...props} />
          </div>
        )}
      />
      <Route
        exact
        path={'/about-us'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <AboutUs {...props} />
            <Footer {...props} />
          </div>
        )}
      />
       <Route
        exact
        path={'/our-services'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <OurServices {...props} />
            <Footer {...props} />
          </div>
        )}
      />
       <Route
        exact
        path={'/privacy-and-policy'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <PrivacyAndPolicy {...props} />
            <Footer {...props} />
          </div>
        )}
      />
      <Route
        exact
        path={'/authorization'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <Authorization {...props} />
            <Footer {...props} />
          </div>
        )}
      />
      <Route
        exact
        path={'/my-account'}
        render={(props) => (
          <div class="tj-wrapper">
            <Header {...props} />
            <MyAccount {...props} />
            <Footer {...props} />
          </div>
        )}
      />
      <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}