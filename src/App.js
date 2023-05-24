import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { HeaderBar } from "./components/styles/header";
import { FooterBar } from "./components/styles/footer";
import Nav from "./components/nav";
import Home from "./components/pages";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Profile from "./components/pages/profile";
import Venue from "./components/pages/venue";
import CreateVenue from "./components/pages/createVenue";
import Booked from "./components/pages/booked";
import Logout from "./components/pages/logout";
import RouteNotFound from "./components/pages/notFound";
import Booking from "./components/pages/booking";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <HeaderBar>
      <Nav />
    </HeaderBar>
  );
}

function Footer() {
  return <FooterBar>Pjatte1337 | 2023 | Holidaze</FooterBar>;
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:name" element={<Profile />} />
          <Route path="booking/:id/:venue" element={<Booking />} />
          <Route path="venue/:id" element={<Venue />} />
          <Route path="new-venue" element={<CreateVenue />} />
          <Route path="booked-success" element={<Booked />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
