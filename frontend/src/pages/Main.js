import React, { useEffect } from "react";

import "./Main.css";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

export default function Main({ match }) {
  return (
    <div>
      <div className="main-container">
        <img src={logo} alt="Tindev" />
        <ul>
          <li>
            <img src={logo} alt="Tindev" />
            <footer>
              <strong>Thallys Braz</strong>
              <p>Estudante</p>
            </footer>
            <div className="buttons">
              <button type="button" alt="Dislike">
                <img src={dislike} />
              </button>
              <button type="button" alt="Like">
                <img src={like} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
