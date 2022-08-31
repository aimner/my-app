import { profileReducer} from "./profileReducer"
import { messageReducer } from './messageReducer';


export const store = {
    renderTree() {
        return true
    },

    _state: {
        messagesPage: {
            users: [
                { name: 'sasha' },
                { name: 'egor' },
                { name: 'artem' },
                { name: 'oleg' },
                { name: 'misha' },
                { name: 'dima' }
            ],
            messages: [
                { text: 'Hi', user: 'egor' },
                { text: 'How are you?', user: 'egor' },
            ],
            newMessage: {
                text: '',
                user: 'egor'
            }
        },
        profilePage: {
            posts: [
                { text: 'Hi', user: 'egor' },
                { text: 'Nice to meet you', user: 'egor' },
            ],
            newPost: {
                text: '',
                user: 'egor',
            }
        }
    },

    get getState() {
        return this._state
    },

    // addNewPost() {
    //     let newPost = {
    //         user: this._state.newPost.user,
    //         text: this._state.newPost.text
    //     }
    //     this._state.posts.push(newPost);
    //     this._state.newPost.text = ''
    //     this.renderTree(this._state, this.addNewPost, this.updateNewPostText);

    // },

    // updateNewPostText(item) {
    //     this._state.newPost.text = item;
    //     this.renderTree(this._state, this.addNewPost, this.updateNewPostText);
    // },

    subscribe(observer) {
        this.renderTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this.getState.profilePage, action)
        this._state.messagesPage = messageReducer(this.getState.messagesPage, action)
        this.renderTree()
    }
}

