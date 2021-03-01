import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export const ShowData = () => {
    const [data, setData] = useState([]);
    const getAge = (dob) => {
        let month_diff = Date.now() - new Date(dob);
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        return age;
    }
    useEffect(() => {
        fetch('/getdata').then(res => res.json())
            .then(data => {
                console.log(data.data)
                setData(data['data']);
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <div className="container">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_YO8gSl.json" background="transparent" speed="1" style={{ margin: 'auto', width: '300px', height: '300px' }} loop autoplay></lottie-player>
                <h2>Registered BloodDonors</h2>
                <table class="highlight">
                    <thead>
                        <tr style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                            <td>name</td>
                            <td>Age today</td>
                            <td>bloodGroup</td>
                            <td>location</td>
                            <td>contact</td>
                            <td>email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i) => {
                            return (<tr key={i._id}>
                                <td>{i.name}</td>
                                <td>{getAge(i.DOB)}</td>
                                <td>{i.bloodGroup}</td>
                                <td>{`${i.city},${i.state},${i.country},${i.zip}`}</td>
                                <td>{i.contact}</td>
                                <td>{i.email}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                <Link class="btn waves-effect waves-light" style={{ marginLeft: '47%' }} to='/signup'>Register</Link>
            </div>
        </>
    )
}
