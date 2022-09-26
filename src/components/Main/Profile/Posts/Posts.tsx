import React from "react";
import { PostType } from "../../../../types/profileReducerTypes";
import { Post } from './Post/Post'

type PropsType = {
    posts: PostType[]
}

export const Posts: React.FunctionComponent<PropsType> = (props) => {
    let posts = props.posts.map((item) =>  <Post postInfo={item}/>)
    return <div>
        {posts}
    </div>
}

export default React.memo(Posts)
