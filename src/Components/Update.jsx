import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Update = () => {
    const [id,setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    const handelUpdate = (event)=>{
        event.preventDefault()
        axios.put(`https://65d07c6eab7beba3d5e3318e.mockapi.io/crud/crud-youtube/${id}`,{name:name,email:email})
        .then(()=>{
            navigate("/read")
        })
    }
    return (
        <>
            <h1>Update Operation</h1>
            <form>
                <div className="mb-3 m-lg-5  ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} 
                    value={name}/>
                </div>
                <div className="mb-3 m-lg-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" onChange={(e) => setEmail(e.target.value)} 
                    value={email}/>
                </div>
                <button type="submit" className="btn btn-primary m-lg-5" onClick={handelUpdate}>Update</button>
            </form>
        </>
    )
}

export default Update
