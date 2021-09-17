function About(props){
    return(
     <>
    <p> About Page!</p>
    <button onClick={props.history.goBack}>Go Back</button>
    <button onClick={props.history.goForward}>Go Forward</button>
   
     </>
    );

}

export default About;