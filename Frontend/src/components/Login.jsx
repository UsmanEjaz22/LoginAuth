import React, { use, useState } from "react";

import './Login.css'

function Login() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    return (
        <>
            <form action="#" target="_blank">
                <div>
                    <div>
                        <div className="cred-box">
                            <label htmlFor="name">name</label>
                            <input type="text" name="name"
                                onChange={((e) => (setName(e.target.value)))}
                            />
                            {name}
                        </div>
                        <div className="cred-box">
                            <label htmlFor="username">username</label>
                            <input type="text" name="username"
                                onChange={((e) => (setUsername(e.target.value)))}
                            />
                            {username}
                        </div>
                        <div className="cred-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={((e) => (setEmail(e.target.value)))}
                            />
                            {email}
                        </div>
                        <div className="cred-box">
                            <label htmlFor="password">password</label>
                            <input type="password" name="password"
                                onChange={((e) => { setPassword(e.target.value) })}
                            />
                            {password}
                        </div>
                        <div className="cred-box">
                            <label htmlFor="re-password">Re-enter password</label>
                            <input type="password" name="re-password"
                                onChange={((e) => (setRePassword(e.target.value)))}
                            />
                            {rePassword}
                        </div>
                    </div>
                    <br />
                    <button>REGISTER</button>
                </div>
            </form>
        </>
    )
}


export default Login