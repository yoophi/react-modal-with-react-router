import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [register, setRegister] = useState(null);
  useEffect(() => {
    setRegister(new URLSearchParams(location.search).get("register"));
  }, [location]);
  return (
    <Modal
      title="Register Modal"
      description="This is a sample modal dialogue with Headless UI"
      isOpen={!!register}
      onClose={() => {
        navigate(location.pathname);
      }}
    >
      <ul>
        <li>
          <Link to={{ pathname: "/", search: "?login=true" }}>Login</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?register=true" }}>Register</Link>
        </li>
      </ul>
      <pre>{JSON.stringify({ register }, null, 2)}</pre>
    </Modal>
  );
};
