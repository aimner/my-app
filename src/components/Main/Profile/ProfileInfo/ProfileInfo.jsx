import React from "react";
import classes from "./ProfileInfo.module.scss";


export class ProfileInfo extends React.Component {
  state = {
    activeEdit: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevStatus) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      activeEdit: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      activeEdit: false,
    });
  };
  changeStatus = (e) => {
    this.props.setStatusThunk(e.currentTarget.value);
  };

  render() {
    return (
      <div className={classes.profile__info}>
        <div>
          {}
          <img
            src={
              this.props.profile.photos?.small
                ? this.props.profile.photos.small
                : "https://avatars.githubusercontent.com/u/85486375?v=4"
            }
            alt="avatar"
            className={classes.avatar}
          />
        </div>
        {this.state.activeEdit ? (
          <input
            type="text"
            defaultValue={this.state.status}
            onBlur={this.deactivateEditMode}
            onChange={this.changeStatus}
          />
        ) : (
          <div onClick={this.activateEditMode}>{this.state.status}</div>
        )}
        {/* {this.state.activeEdit || <div onClick={this.activateEditMode}>{this.props.status}</div>} */}
        <div className="profile-description">
          <ul>
            <li>{this.props.profile.fullName}</li>
            <li>{this.props.profile.userId}</li>
            <li>{this.props.profile.aboutMe}</li>
          </ul>
        </div>
      </div>
    );
  }
}
// export const ProfileInfo = (props) => {

//   return (
//     <div className={classes.profile__info}>
//       <div>
//         <img
//           src={props.profile.photos?.small ? props.profile.photos.small : "https://avatars.githubusercontent.com/u/85486375?v=4"}
//           alt="avatar"
//           className={classes.avatar}
//         />
//       </div>
//       <div>{props.status}</div>
//       <input type="text" />
//       <div className="profile-description">
//         <ul>
//           <li>{props.profile.fullName}</li>
//           <li>{props.profile.userId}</li>
//           <li>{props.profile.aboutMe}</li>

//         </ul>
//       </div>
//     </div>
//   );
// };
