import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'


const MyPosts = (props) => {

let newPost = React.createRef();

let addNewPost = () => {
  props.newpost();
};

let updatePost = () => {
    let text = newPost.current.value;
    props.changepost(text);

};

let postNew = props.profilePage.posts.map( el => <Post content={el.content} />);

   return (
       <div>
           <div className={classes.myPosts}>My posts</div>
           <div className={classes.text}>
               <textarea ref = {newPost} className={classes.textArea} onChange={updatePost} value={props.profilePage.firstPost}/>
               <button onClick={ addNewPost } className={classes.textButton}>Add post</button>
           </div>
           <div>
               {postNew}
           </div>
       </div>
   )

}

export default MyPosts;