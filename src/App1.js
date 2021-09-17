import React, { createRef, useRef } from "react";
import Counter  from "./Counter";
import PropTypes from "prop-types"
class App1 extends React.PureComponent {
   
    constructor(props) {
        super(props);
        this.state = { 
            count:0,  
            name:"karthick",
            user:{name:"Guvi"}       }
    }
   
   inputRef= createRef();
    handleSubmit=()=>{
        console.log("Submited!...");
        var stuName= document.getElementById("stuName");
        console.log(stuName.value)
        console.log(this.inputRef.current);
        this.inputRef.current.increment()

    }
    render() { 
        
        
        console.log("rendered!")
        return (
            <>
            <p>Name:{this.props.name}</p>
            <p>Age:{this.props.age}</p>
            <p>City:{this.props.city}</p>

            <input id="stuName" ref={this.inputRef} type="text"/>
            <button onClick={this.handleSubmit}>Submit</button>
          
          <Counter ref={this.inputRef}></Counter>
          
            <p> Count: {this.state.count}</p>
            <p> Name: {this.state.name}</p>
            <p> User: {this.state.user.name}</p>

            <p></p>
            <button onClick={()=>this.setState({count:0})}>Reset</button>
            <button onClick={()=>this.setState({name:"karthick"})}>Change Name</button>

           <button onClick={()=>this.setState({user:{name:"Guvi"}})}>Change Object</button>
  
            </>
          );
    }
}
 
// props validaton
App1.propTypes={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city:PropTypes.isRequired,
    gender:PropTypes.oneOf(["male,female,other"]).isRequired,
}


App1.defaultProps={
 name:"shakthi",
 city:"coimbatore"
}


console.log(App1)
export default App1;