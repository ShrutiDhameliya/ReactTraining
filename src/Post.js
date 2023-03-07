
import React,{useEffect,useState} from 'react';
function Get() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [gender,setGender] = useState("");
const [status,setStatus] = useState("");
function saveUser(){
    console.warn(name,email,gender,status);
    let data={name,email,gender,status}
    fetch('https://gorest.co.in/public/v2/users',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.warn("result",result);
    })
}
  return (
    <div className="App">
        <h1>POST API Example</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br/>
        <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}} name="gender"/><br/>
        <input type="text" value={status} onChange={(e)=>{setStatus(e.target.value)}} name="status"/><br/>
        <button type="button" onClick={saveUser}>Save New User</button>
    </div>
  );
}

export default Get;