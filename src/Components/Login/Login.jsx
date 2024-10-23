import React, { useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../../Context/LoginContext/LoginContext"
import { useNavigate } from "react-router-dom"

function Login() {
    const [user, setUser] = useState("")
    const {setUserName} = useContext(LoginContext);
    {
        user , setUserName;
    }
    const navigate = useNavigate();

    function handleLogin(e)
    {
     e.preventDefault();
     setUserName(user);
     navigate('/Profile');
    }


    return (
        <div className="contsc">
        <div className="formlogs" onSubmit={handleLogin}>
            <form className="sup">
                <div className="unames">
                    <label>UserName</label>
                    <input type="text"  onChange={(e)=>setUser(e.target.value)} placeholder="Username"></input>
                </div>
                <div className="unames">
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                </div>

                <button className="regbtnssss">Login</button>
            </form>
            <div className="regbtns"><p className="sgnupha">Don't have an account?</p><Link className="signupreg" to="/Register">Register</Link></div>

        </div>
        </div>    )
}
export default Login