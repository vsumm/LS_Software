import React from "react";
import fire from "./firebase";

class Login extends React.Component {
  login() {
    var email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title">Fraction Login</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input id="email" type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input id="password" type="password" placeholder="Password" />
                </div>
                <input
                  className="btn solid"
                  type="submit"
                  value="Login"
                  onClick={this.login}
                />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3> Fraction Analytics</h3>
                <p>
                  We offers a wide range of video-related solutions for your
                  Exterprise areas and Home.
                </p>
              </div>
              <img src="./assets/img/login.svg" className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
