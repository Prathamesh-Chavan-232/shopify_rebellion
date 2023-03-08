import React from "react";

export const Cart = () => {
  const ref = React.useRef("myForm");

  function openForm() {
    ref.current.style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  return (
    <div>
      <button className="open-button" onClick={openForm}>
        Open Form
      </button>
      <div className="form-popup" id="myForm">
        <div className="form-popup" id="myForm">
          <form action="/action_page.php" className="form-container">
            <h1>Login</h1>

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit" className="btn">
              Login
            </button>
            <button type="button" className="btn cancel">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
