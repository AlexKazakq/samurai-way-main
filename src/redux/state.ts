export type AppPropsType = {
    profilePage : ProfilePageType
   messagesPage: DialogPageType
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export type PostsType = {
    id?: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id?: number
    message: string
}

let rerenderEntireTree = (state: AppPropsType) => {}

export let state: AppPropsType = {
    profilePage:  {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 10},
            {id: 3, message: "Blabla", likesCount: 10},
            {id: 4, message: "Dada", likesCount: 10},
        ],
        newPostText: 'it-kamasutra.com'
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your IT-KAMASUTRA"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ]
    }
}

export const addPost = () => {
   const newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state:AppPropsType) => void) => {
    rerenderEntireTree = observer
}