import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  // debugger;
  return (
    
    <div>
     <img className = {classes.img} alt="background" src="https://s1.1zoom.ru/big0/518/Denmark_Forests_Skodsborg_Snow_Spruce_Trunk_tree_605018_1280x768.jpg"></img>
       <MyPostsContainer />
      </div>
  );
}

export default Profile;
