import React, { useState, useEffect } from 'react'
import TableFilter from 'react-table-filter';
function App() {
  return (
    <>
      <ShowData />
      <Register />
    </>
  );
}

export default App;
export const ShowData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/getdata').then(res => res.json())
      .then(data => {
        console.log(data.data)
        setData(data['data']);
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <table>
      <tr>
        <td>name</td>
        <td>DOB</td>
        <td>bloodGroup</td>
        <td>city</td>
        <td>contact</td>
        <td>email</td>
      </tr>
      {data.map((i) => {
        return (<tr key={i._id}>
          <td>{i.name}</td>
          <td>{i.DOB}</td>
          <td>{i.bloodGroup}</td>
          <td>{i.city}</td>
          <td>{i.contact}</td>
          <td>{i.email}</td>

        </tr>)
      })}
    </table>
  )
}

export const Register = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [DOB, setDOB] = useState('')
  const [contact, setcontact] = useState('')
  const [bloodGroup, setbloodGroup] = useState('')
  const [city, setcity] = useState('')
  const PostData = () => {
    fetch('/signup', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, contact, bloodGroup, city, DOB
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <form>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to Register yourself.</p>
        <hr />
        <label for="name" ><b>Name</b></label>
        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter name" name="name" id="name" required />
        <label for="birthday">Birthday:</label><br />
        <br /><input value={DOB} onChange={(e) => { setDOB(e.target.value) }} type="date" id="birthday" name="birthday" />
        <br /><br />
        <label for="email" ><b>Email</b></label>
        <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" placeholder="Enter Email" name="email" id="email" required />

        <label for="contact" ><b>contact</b></label>
        <input value={contact} onChange={(e) => { setcontact(e.target.value) }} type="text" placeholder="Enter contact" name="contact" id="contact" required />

        <label for="bloodGroup" ><b>bloodGroup</b></label>
        <input value={bloodGroup} onChange={(e) => { setbloodGroup(e.target.value) }} type="text" placeholder="Enter bloodGroup" name="bloodGroup" id="bloodGroup" required />

        <label for="city"><b>city</b></label>
        <input value={city} onChange={(e) => { setcity(e.target.value) }} type="text" placeholder="city" name="city" id="city" required />
        <hr />
        <button onClick={(e) => { e.preventDefault(); PostData() }} type="submit" className="registerbtn">Register</button>
      </div>
    </form>)
}