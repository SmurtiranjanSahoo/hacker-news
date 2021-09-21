import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-wrapper">
      <p>You have to be logged in to submit.</p>
      <form className="login-wrapper-form" onSubmit={handleSubmit}>
        <h4>Login</h4>
        <div>
          <label htmlFor="">username: </label>
          <input type="text" />
        </div>
        <div className="login-wrapper-form-div">
          <label htmlFor="">password: </label>
          <input type="text" />
        </div>
        <button>login</button>
      </form>
      <a href="">Forget your password?</a>
      <form className="login-wrapper-form" onSubmit={handleSubmit}>
        <h4>Create Account</h4>
        <div>
          <label htmlFor="">username: </label>
          <input type="text" />
        </div>
        <div className="login-wrapper-form-div">
          <label htmlFor="">password: </label>
          <input type="text" />
        </div>
        <button>create account</button>
      </form>
    </div>
  );
};

export default Login;
