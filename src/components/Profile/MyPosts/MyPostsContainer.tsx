import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {InitialStateType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";


type MapDispatchPropsType = {
    addPost: (newPostText: string) => void,
}

let mapStateToProps = (state: AppStateType):InitialStateType => {
    return {
        posts: state.profilePage.posts,
        profile: null,
        status: ''
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }

}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);