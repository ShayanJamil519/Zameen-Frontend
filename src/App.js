import React, {
  useEffect,
  // , { useEffect, useState }
} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/AboutUs/About";
import BlogViewDetails from "./pages/Blog/BlogViewDetails";
import ProtectedRoute from "./components/Route/ProtectedRoute";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/User/SignUp/SignUp";
import Help from "./pages/Help/Help";
import Profile from "./pages/User/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import RegisterProperty from "./pages/RegisterProperty/RegisterProperty";
import { loadUser } from "./actions/userAction";
import store from "./store";
import EditProfile from "./pages/User/EditProfile/EditProfile";
import Booking from "./pages/BookingProperty/Booking";
import Sell from "./pages/Sell/Sell";

import propertyDetails from "./pages/Sell/propertyDetails";
import ProjectDetail from "./pages/BookingProperty/ProjectDetail";

import ProjectProperty from "./pages/BookingProperty/ProjectProperty";
import BlogMain from "./pages/Blog/BlogMain";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import PropertyList from "./pages/Admin/PropertyList/PropertyList";
import CreateProject from "./pages/Admin/CreateProject/CreateProject";
import UserList from "./pages/Admin/UserList/UserList";
import ProjectList from "./pages/Admin/ProjectList/ProjectList";
import sellDetail from "./pages/Sell/sellDetail";
import ProjectRegisteration from "./pages/Admin/ProjectRegisteration/ProjectRegisteration";
import CreateBlog from "./pages/Blog/CreateBlog";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/reg-property" component={RegisterProperty} />

          <Route exact path="/EditProfile" component={EditProfile} />
          <Route exact path="/book-property/:id" component={Booking} />
          <Route exact path="/book-property" component={Booking} />

          <Route exact path="/sell" component={Sell} />
          <Route
            exact
            path="/sell/:keyword/:purpose/:price/:landArea"
            component={Sell}
          />

          <Route exact path="/About" component={About} />
          <Route exact path="/Blog/Blogdata/:id" component={BlogViewDetails} />

          <Route exact path="/property/:id" component={propertyDetails} />

          <Route exact path="/sellDetail/:id" component={sellDetail} />
          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />

          <Route exact path="/About" component={About} />
          <Route exact path="/Read_Blog" component={BlogMain} />

          <Route exact path="/Create_Blog" component={CreateBlog} />

          <Route exact path="/sellDetail/:id" component={sellDetail} />
          <Route exact path="/projectDetail/:id" component={ProjectDetail} />
          <Route exact path="/projects" component={ProjectProperty} />
          <Route exact path="/admin/property" component={PropertyList} />
          <Route exact path="/admin/users" component={UserList} />
          <Route exact path="/admin/projects" component={ProjectList} />
          <Route exact path="/admin/createProject" component={CreateProject} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route
            exact
            path="/admin/proj-registeration"
            component={ProjectRegisteration}
          />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
