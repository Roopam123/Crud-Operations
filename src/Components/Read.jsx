import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Read = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    getData();
  },[])

  // Get Data 
  const getData =  ()=>{
    axios.get("https://65d07c6eab7beba3d5e3318e.mockapi.io/crud/crud-youtube")
    .then((res)=>{
      setData(res.data)
    })
  };

  // Delete Data

  const hadelDelete =  (id)=>{
     axios.delete(`https://65d07c6eab7beba3d5e3318e.mockapi.io/crud/crud-youtube/${id}`)
    .then(()=>{getData()})
    .catch((error)=>{console.log("Error",error)})
  }

  //  Edit data 

  const setToLocalStorage = (id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }
  return (<>
  <h1>Read operations</h1>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      {data.map((ele,index)=>(
        <tbody key={index}>
        <tr>
          <th scope="row">{ele.id}</th>
          <td>{ele.name}</td>
          <td>{ele.email}</td>
          <td><Link to="/update"><button type="button" className="btn btn-success" onClick={()=>setToLocalStorage(
            ele.id,ele.name,ele.email
          )}>Edit</button></Link></td>
          <td><button type="button" className="btn btn-danger" onClick={()=>
            hadelDelete(
              ele.id
              )}>Delete</button></td>
        </tr>
      </tbody>
      ))}
    </table>
    <Link to='/'><button type="button" className="btn btn-secondary">Create</button></Link>
  </>
  )
}

export default Read
