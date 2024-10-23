import React from "react"
import "./Signup.css"
import { Link } from "react-router-dom"

function Signup() {
    return (
        <div className="contsc">
        <div className="formlogs">
            <form className="sup">
                <div className="unames">
                    <label>NAME</label>
                    <input type="text" placeholder="Name"></input>
                </div>
                <div className="unames">
                    <label>EMAIL</label>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div className="upasss">
                    <label>PASSWORD</label>
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className="upasss">
                    <label>CONFIRM PASSWORD</label>
                    <input type="password" placeholder="Confirm Password"></input>
                </div>
                <button className="regbtnssss">Login</button>
            </form>
            <div className="regbtns"><p className="sgnupha">Have an account?</p><Link className="signupreg" to="/Login">Login</Link></div>

        </div>
        </div>
    )
}
export default Signup