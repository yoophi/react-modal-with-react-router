import { Link, Outlet } from "react-router-dom";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        <Link to="/">HomePage</Link>
      </h1>
      <div>
        <Link to="/profile">Go To Profile</Link>

        <Link to={{ pathname: "/", search: "?login=true" }}>Login</Link>
      </div>
      <Outlet />
    </>
  );
};
