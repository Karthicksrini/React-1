import {useHistory,useLocation}from "react-router-dom"


function Home(){
    const history= useHistory();
    const location=useLocation();

    return(
     <>]
    <p> Home Page!</p>
    <button onClick={history.goBack}>Go Back</button>
    <button onClick={history.goForward}>Go Forward</button>
    <button onClick={()=>history.push("./about")}>Go to About Page- Push</button>
    <button onClick={()=>history.replace("./about")}>Go to About Page - Replace</button>
     
    <p>{location.search}</p>
     </>


    );

    

}

export default Home;