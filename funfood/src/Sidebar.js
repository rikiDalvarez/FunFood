import React from "react";

function Sidebar() {
    return (
        <div className="base__container">
            <h2 className="base__container__header">Login</h2>
            <div className="form">
                <div className="form__group">
                    <label htmlFor="username">Username</label>
                    <input className="form__group__input" type="text" name="username" placeholder="username"></input>
                </div>
                <div className="form__group">
                    <label htmlFor="password">Password</label>
                    <input className="form__group__input" type="password" name="password" placeholder="password"></input>
                </div>
            </div>
            <div className="footer">
                <button className="btn">
                    Login
              </button>
            </div>
        </div>
    )
}
export default Sidebar;