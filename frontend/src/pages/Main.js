import React, { useEffect, useState } from "react";

import "./Main.css";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

import api from "../services/api";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });
      console.log("response.data: ", response.data);
      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id]);

  return (
    <div>
      <div className="main-container">
        <img src={logo} alt="Tindev" />
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
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
          ))}
        </ul>
      </div>
    </div>
  );
}
