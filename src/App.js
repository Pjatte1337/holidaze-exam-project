import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { HeaderBar } from "./components/styles/header.styles";
import { FooterBar } from "./components/styles/footer.styles";
import Nav from "./components/nav";
import Home from "./components/pages";
import LoginPage from "./components/pages/login";
import RegisterPage from "./components/pages/register";
import ProfilePage from "./components/pages/profile";
import VenuePage from "./components/pages/venue";
import NewVenuePage from "./components/pages/newVenue";
import BookedPage from "./components/pages/booked";
import LogoutPage from "./components/pages/logout";
import RouteNotFound from "./components/pages/notFound";
import BookingPage from "./components/pages/booking";
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
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile/:name" element={<ProfilePage />} />
          <Route path="booking/:id/:venue" element={<BookingPage />} />
          <Route path="venue/:id" element={<VenuePage />} />
          <Route path="new-venue" element={<NewVenuePage />} />
          <Route path="booked-success" element={<BookedPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
