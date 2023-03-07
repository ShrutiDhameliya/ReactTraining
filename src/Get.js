
import React,{useEffect,useState} from 'react';
function Get() {
  const [data,setData]=useState([])
  useEffect(()=>{
  fetch('https://gorest.co.in/public/v2/users').then((result)=>{
    result.json().then((res)=>{
      // console.warn("result",res) 
      setData(res)
    })
  })
},[]) 
console.warn(data)
  function deleteUser(id){
    fetch(`https://gorest.co.in/public/v2/users/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((res)=>{
        console.warn(res);
      })
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Get API Call</h1>
        <table border={1}>
          <tr>
             <td>Id</td>
             <td>Name</td>
             
             <td>Email</td>
             <td>Gender</td>
             <td>Status</td>
          </tr>
          {
            data.map((item)=>
            <tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.gender}</td>
               <td>{item.status}</td>
               <td><button onClick={()=>deleteUser()}>Delete</button></td>
            </tr>
            )
          }
        </table>
      </div>
    </div>
  );
}

export default Get;