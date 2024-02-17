import React, { useState } from 'react';
import axios from "axios";

const Create = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const header = {authorization: "your token comes here",}
    const handelSubmit = ()=>{
        axios.post(
            "https://65d07c6eab7beba3d5e3318e.mockapi.io/crud/crud-youtube",
            {name:name,email:email},
            header
        )
    }
    return (
        <form>
            <div className="mb-3 m-lg-5  ">
                <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-3 m-lg-5">
                <label htmlFor="exampleInputPassword1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleInputPassword1" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary m-lg-5" onClick={handelSubmit}>Submit</button>
        </form>
    )
}

export default Create
