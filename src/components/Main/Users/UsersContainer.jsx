import { connect } from 'react-redux/es/exports';
// import { Users } from './Users';

import { unFollowActionCreator, followActionCreator, setUsersActionCreator } from './../../../state/usersReducer';
import { UsersClass } from './UsersClass';



const mapStateToPropse = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followActionCreator(id))
        },
        unFollowUser: (id) => {
            dispatch(unFollowActionCreator(id))
        },
        setUsers: (users) => {
            // debugger
            dispatch(setUsersActionCreator(users))
        }
    }
}



export const UserContainer = connect(mapStateToPropse, mapDispatchToProps)(UsersClass)