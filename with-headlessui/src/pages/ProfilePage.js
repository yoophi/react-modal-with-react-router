import React from "react";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">ProfilePage</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile?dialogue=login">Login</Link>
        </li>
      </ul>
    </>
  );
};
