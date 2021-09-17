import{BrowserRouter,Route,Switch,Redirect, NavLink} from"react-router-dom";

import Home from "./Home";
import About from "./About";
import Post from "./Post";
import NotFound from "./NotFound";
import posts from "./posts";
import Protected from "./Protected";

function PrivateRoute({path, component:Component}){
  return(
    <>
    <Route path={path}
     render={(props)=>{
              const islogin=localStorage.getItem("isLoggedIn");
              return islogin?<Component props={props}/>:<p>Please Login!...</p>
            }}
    ></Route>
    </>

  )

}

function App(){
    return(
        <BrowserRouter>
        <div>
          {/* activeClass */}
          < NavLink activeStyle={{color:"green"}} to="/">Home</ NavLink> 
          < NavLink activeStyle={{color:"green"}} to="/about">About</ NavLink> 
          < NavLink  activeStyle={{color:"green"}}to="/post">Post</ NavLink> 
        <NavLink activeStyle={{color:"green"}} to="/protected">Protected</NavLink>
          <button onClick={()=>{
           localStorage.setItem("isLoggedIn","true")
          }}>Login</button>
        </div>


        <Switch>
            <Route path="/" exact component={Home}></Route>
            <PrivateRoute path="/protected" component={Protected}/>
            <Route path="/about" component={About}></Route>
            <PrivateRoute path="/post" component={Post}/>
            <Route path="/posts/:id" component={posts}></Route>
            <Route path="/home">
              <Redirect to="/"></Redirect>
            </Route>
            <Route path="*" component={NotFound}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default App;