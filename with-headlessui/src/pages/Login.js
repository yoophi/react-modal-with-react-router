import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    setIsOpen(new URLSearchParams(location.search).get("dialogue") === "login");
  }, [location]);
  return (
    <Modal
      title="Login Modal"
      description="This is a sample modal dialogue with Headless UI"
      isOpen={!!isOpen}
      onClose={() => {
        navigate(location.pathname);
      }}
    >
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?dialogue=login" }}>login</Link>
        </li>
        <li>
          <Link to={{ pathname: "/profile", search: "?dialogue=login" }}>
            profile/login
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?dialogue=register" }}>
            Register
          </Link>
        </li>
      </ul>
      <pre>{JSON.stringify({ login: isOpen }, null, 2)}</pre>
    </Modal>
  );
};
