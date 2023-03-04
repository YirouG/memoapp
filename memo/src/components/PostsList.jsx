
import{useLoaderData} from 'react-router-dom'
import Post from './Post.jsx'
import classes from './PostsList.module.css'
function PostsList(){
    const posts=useLoaderData();



   return(
   <>
   
   {posts.length>0 &&(<ul className={classes.posts}>
     {posts.map((post)=><Post id={post.id} key={post.id} author={post.author} body={post.body}/>)}


    </ul>)}
   {posts.length===0 && <div style={{textAlign:'center',color:'white'}}>
    <h2>There are no posts yet, start adding something!</h2></div>}

    </>);
    
}

export default PostsList