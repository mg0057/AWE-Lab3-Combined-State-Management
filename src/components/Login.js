
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const contacts = ["Mehak", "Manahil", "Ahmed", "Yahya"];

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim() || !password) {
      setMessage("Please enter username and password.");
      return;
    }

    setUser(username.trim());
    setMessage("Welcome, " + username.trim() + "!");
    setPassword("");
  }

  return (
    <div className="login-layout">
      <aside className="contacts">
        <h2>Contacts</h2>
        {contacts.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </aside>

      <div className="login-box">
        <h2>LOGIN</h2>
        <p>Current User: {user}</p>

        <form onSubmit={handleSubmit}>
          <label>User Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button type="submit">Submit</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
