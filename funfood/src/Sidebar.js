import React, { useState } from "react";

function Sidebar() {
    const [accounts, setAccounts] = useState({ email: "", password: "", isLoggedIn: false })

    const handleChange = event => {
        const { name, value } = event.target;
        setAccounts({
            ...accounts,
            [name]: event.target.value,

        })
    }
    console.log(accounts)
    const handleSubmit = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setAccounts({
            ...accounts,
            [name]: event.target.value,
            isLoggedIn: true
        })
        submit();


    }

    function submit() {
        console.log(`welcome to FunFood,`)
    }

    return (

        <div className="base__container">
            {accounts.isLoggedIn ? (<h3>Welcome back to FunFood Ricardo</h3>) : (
                <form onSubmit={handleSubmit} noValidate>
                    <h2 className="base__container__header">Login</h2>
                    <div className="form">
                        <div className="form__group">
                            <label htmlFor="Email">Email</label>
                            <input
                                className="form__group__input"
                                type="email" name="email"
                                value={accounts.email}
                                placeholder="email"
                                onChange={handleChange}></input>
                        </div>
                        <div className="form__group">
                            <label htmlFor="password">Password</label>
                            <input
                                className="form__group__input"
                                type="password" name="password"
                                placeholder="password"
                                value={accounts.password}
                                onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn">
                            Login
              </button>
                    </div>
                </form>
            )}
        </div>
    )
}
export default Sidebar;