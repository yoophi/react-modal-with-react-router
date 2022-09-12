import { LoremIpsum } from "lorem-ipsum";
import React, { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

export const HomePage = () => {
  const paragraphs = useMemo(() => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
    return Array.from({ length: 20 }, (_) =>
      lorem.generateSentences(Math.floor(Math.random() * 10 + 1))
    );
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        <Link to="/">HomePage</Link>
      </h1>
      <ul>
        <li>
          <Link to="/profile">Go To Profile</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?dialogue=login" }}>Login</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", search: "?dialogue=register" }}>
            Register
          </Link>
        </li>
      </ul>
      {paragraphs.map((p) => (
        <p className="mb-4">{p}</p>
      ))}
      <Outlet />
    </>
  );
};
