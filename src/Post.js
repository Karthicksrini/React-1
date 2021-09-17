import {Link } from "react-router-dom"

const post=[
    {  "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
      "id": 2,
      "title": "qui est esse",
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
      "id": 4,
      "title": "eum et est occaecati",
    },
    {
      "id": 5,
      "title": "nesciunt quas odio",
    },
    {
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
    },
    {
     
      "id": 7,
      "title": "magnam facilis autem",
    },
]


function Post(props){
    return(
     <>
    <p> Post Page!</p>
    
    {post.map((post)=>{
      return(
          <p key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </p>
      )
    })}



     </>
    );

}

export default Post;