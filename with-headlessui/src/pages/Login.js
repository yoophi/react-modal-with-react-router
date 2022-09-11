import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

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
      <pre>{JSON.stringify({ login }, null, 2)}</pre>
    </Modal>
  );
};
