import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    setIsOpen(
      new URLSearchParams(location.search).get("dialogue") === "register"
    );
  }, [location]);
  return (
    <Modal
      title="Register Modal"
      description="This is a sample modal dialogue with Headless UI"
      isOpen={!!isOpen}
      onClose={() => {
        navigate(location.pathname);
      }}
    >
      <ul>
        <li>
          <Link to={{ pathname: "/", search: "?dialogue=login" }}>Login</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?dialogue=register" }}>
            Register
          </Link>
        </li>
      </ul>
      <pre>{JSON.stringify({ register: isOpen }, null, 2)}</pre>
    </Modal>
  );
};
