import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router";
import './login.css';
import {getusers} from './Api';


    var api='';
    var name='';
    var pwd='';


const Login=()=>{
    const [apis,setApi]=useState(api);
    const [user,setUser]=useState(name);
    const [pss,setPass]=useState(pwd);

    const [p1,p2]=apis;

    useEffect(()=>{
        getAllUsers();
      },[])

    const getAllUsers= async()=>{

        const response=await getusers();
        setApi(response.data);
             
    }


const history=useHistory();

const nameChange=(e)=>{
    
    setUser(e.target.value);
    console.log(p1.id);

}


const passChange=(e)=>{
setPass(e.target.value);

}

const handleSubmit=(e)=>{
e.preventDefault()

if(pss===p1.id || pss===p2.id)
{
history.push('./chat');
}
else
{
    alert('Enter Correct Credentials');
}
}
    
        return(
 <>
            
    <form className="box" onSubmit={(e)=>handleSubmit(e)}>
    <h1>HeyBud</h1>
    
              <input type="email"  name="user" placeholder="Enter username" required onChange={(e)=>nameChange(e)}  />
              <input type="password" name="pwd" placeholder="Enter Key" required onChange={(e)=>passChange(e)} />
                <div className="buttn">
                <input type="submit" onClick={(e)=>handleSubmit(e)} value='login'/>
                
                </div>
        </form>
  
</>
    )
        


        }
export default Login;