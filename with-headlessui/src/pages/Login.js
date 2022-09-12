import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  useEffect(() => {
    setLogin(new URLSearchParams(location.search).get("login"));
  }, [location]);
  return (
    <Modal
      title="Login Modal"
      description="This is a sample modal dialogue with Headless UI"
      isOpen={!!login}
      onClose={() => {
        navigate(location.pathname);
      }}
    >
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?login=true" }}>login</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?register=true" }}>Register</Link>
        </li>
      </ul>
      <pre>{JSON.stringify({ login }, null, 2)}</pre>
    </Modal>
  );
};
