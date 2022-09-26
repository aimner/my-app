import { Messages } from "./Messages";
import { actionsMessageReducer } from "../../../state/messageReducer";

import { connect } from "react-redux/es/exports";
import { AuthHoc } from "../../../hoc/AuthHoc";
import { compose } from "redux";
import { AppStateType } from "../../../state/redux-store";
import { MessageType, UserType } from "../../../types/messageReducerTypes";

let addNewMessageActionCreator = actionsMessageReducer.addNewMessageActionCreator;

type MapStatePropsType = {
  users: UserType[]
  messages: MessageType[]
}

type MapDispacthPropsType = {
  addNewMessageActionCreator: (message: string) => void
}

type OwnPropsType = {
 
}


let mapStateToPropse = (state: AppStateType) => {
  return {
    users: state.messagesPage.users,
    messages: state.messagesPage.messages,
  };
};

export default compose(
  connect(mapStateToPropse, {addNewMessageActionCreator}),
  AuthHoc
)(Messages) as React.FunctionComponent;


