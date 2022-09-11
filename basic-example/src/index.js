import { render } from "react-dom";
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Modal from "./pages/modal";

import React, { useState, useEffect } from "react";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  useEffect(() => {
    setLogin(new URLSearchParams(location.search).get("login"));
  }, [location]);
  return (
    login && (
      <Modal
        onClick={() => {
          navigate(location.pathname);
        }}
      >
        <div>Login Modal</div>
        <pre>{JSON.stringify({ login }, null, 2)}</pre>
      </Modal>
    )
  );
};

export const HomePage = () => {
  return (
    <>
      <div>
        <Link to="/">HomePage</Link>
      </div>
      <div>
        <Link to="/profile">Go To Profile</Link>

        <Link to={{ pathname: "/", search: "?login=true" }}>Login</Link>
      </div>
      <Outlet />
    </>
  );
};

export const ProfilePage = () => {
  return <div>ProfilePage</div>;
};

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
