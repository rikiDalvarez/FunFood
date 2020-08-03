import React from "react";

function Register() {
    return (
        <div className="base__container">
            <h2 className="base__container__header">Register</h2>
            <div className="form">
                <div className="form__group">
                    <label htmlFor="username">Username</label>
                    <input className="form__group__input" type="text" name="username" placeholder="username"></input>
                </div>
                <div className="form__group">
                    <label htmlFor="password">Password</label>
                    <input className="form__group__input" type="password" name="password" placeholder="password"></input>
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input className="form__group__input" type="email" name="email" placeholder="email"></input>
                </div>

            </div>
            <div className="footer">
                <button className="btn">
                    Register
              </button>
            </div>
        </div>
    )
}
export default Register;