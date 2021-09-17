import {useRouteMatch , useParams} from "react-router-dom"

function Posts(){
    const match= useRouteMatch();
    const params= useParams();
    console.log(match.params)
    return(
     <>]
    <p> Posts Page! -{params.id}</p>
     </>
    );

}

export default Posts;