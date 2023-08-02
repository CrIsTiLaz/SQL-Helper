import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListaBazeDeDate = ({ bazeDeDate, trimiteNumeBazaDeDate }) => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    // Redirecționează către pagina de start
    navigate("/test");
  };

  return (
    <ul>
      {bazeDeDate.map((numeBazaDeDate) => (
        <li
          key={numeBazaDeDate}
          onClick={() => {
            trimiteNumeBazaDeDate(numeBazaDeDate);
            redirectToHomePage();
          }}
        >
          {numeBazaDeDate}
        </li>
      ))}
    </ul>
  );
};

export default ListaBazeDeDate;
