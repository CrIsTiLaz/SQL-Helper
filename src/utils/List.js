import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListaBazeDeDate = ({ bazeDeDate }) => {
  const navigate = useNavigate();

  const redirectToHomePage = (numeBazaDeDate) => {
    // Redirecționează către pagina de start
    navigate("/test", { state: { database: numeBazaDeDate } });
  };

  return (
    <ul>
      {bazeDeDate.map((numeBazaDeDate) => (
        <li
          id={"databases"}
          key={numeBazaDeDate}
          onClick={() => {
            redirectToHomePage(numeBazaDeDate);
          }}
        >
          {numeBazaDeDate}
        </li>
      ))}
    </ul>
  );
};

export default ListaBazeDeDate;
