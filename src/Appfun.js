import {useState } from "react";

function Appfun(){
    const [count,setCount]=useState(0);
    const [name, changeName]= useState("Guvi");
    const [user, changeUser]= useState({name:"karthick"})
    console.log("rendered!")
    return (
        <>
        <p> Count: {count}</p>
        <p> Name:{name}</p>
        <p>user:{user.name}</p>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>changeName("Guvi")}>Change Name</button>
        <button onClick={()=>changeUser({name:"karthick"})}>Change Object</button>
        </>
      );
}

export default Appfun;