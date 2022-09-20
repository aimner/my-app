import React from "react";
import { Post } from './Post/Post'

export const Posts = (props) => {
    console.log('RENDER')
    let posts = props.posts.map((item) =>  <Post postInfo={item}/>)
    return <div>
        {posts}
    </div>
}

export default React.memo(Posts)
