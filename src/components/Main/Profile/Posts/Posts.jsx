import React from "react";
import { Post } from './Post/Post'

export const Posts = (props) => {
 
    let posts = props.posts.map((item) =>  <Post postInfo={item}/>)
    return <div>
        {posts}
    </div>
}
