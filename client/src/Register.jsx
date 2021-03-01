import React, { useState, useEffect } from 'react'
import { Link, BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'

export const Register = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [DOB, setDOB] = useState('')
    const [contact, setcontact] = useState('')
    const [bloodGroup, setbloodGroup] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [country, setcountry] = useState('')
    const [zip, setzip] = useState('')
    const PostData = () => {
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                contact,
                bloodGroup,
                city,
                DOB,
                state,
                country,
                zip,
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <nav>
                <div class="nav-wrapper">
                    <Link class="brand-logo" to='/'>BloodBank</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link class="btn waves-effect waves-light" to='/'>Home</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container" style={{ width: '50%' }}>
                <form >
                    <h1>Register</h1>
                    <p>Please fill in this form to Register yourself.</p>
                    <hr />
                    <label for="name" ><b>Name</b></label>
                    <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Enter name" name="name" id="name" required />
                    <label for="birthday">Birthday:</label><br />
                    <br /><input value={DOB} onChange={(e) => { setDOB(e.target.value) }} type="date" id="birthday" name="birthday" />
                    <br /><br />
                    <label for="email" ><b>Email</b></label>
                    <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="contact" ><b>contact</b></label>
                    <input value={contact} onChange={(e) => { setcontact(e.target.value) }} type="text" placeholder="Enter contact" name="contact" id="contact" required />

                    <label for="bloodGroup" ><b>bloodGroup</b></label>
                    <input value={bloodGroup} onChange={(e) => { setbloodGroup(e.target.value) }} type="text" placeholder="Enter bloodGroup" name="bloodGroup" id="bloodGroup" required />

                    <label for="country"><b>country</b></label>
                    <input value={country} onChange={(e) => { setcountry(e.target.value) }} type="text" placeholder="country" name="country" id="country" required />
                    <hr /><label for="state"><b>state</b></label>

                    <input value={state} onChange={(e) => { setstate(e.target.value) }} type="text" placeholder="state" name="state" id="state" required />
                    <hr /><label for="state"><b>state</b></label>
                    <label for="city"><b>city</b></label>

                    <input value={city} onChange={(e) => { setcity(e.target.value) }} type="text" placeholder="city" name="city" id="city" required />
                    <hr />

                    <input value={zip} onChange={(e) => { setzip(e.target.value) }} type="text" placeholder="zip" name="zip" id="zip" required />
                    <hr />



                    <button className="btn waves-effect waves-light" onClick={(e) => {
                        PostData();
                        setname("");
                        setemail("");
                        setcontact("");
                        setbloodGroup("");
                        setcity("");
                        setDOB("");
                        setstate("");
                        setcountry("");
                        setzip("");
                    }} type="submit" >Register</button>
                </form>
            </div>
        </>)
}