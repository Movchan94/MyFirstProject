let renenderEntireTree = () => {
    console.log('state  changed');
}

let state = {
      profilePage: {
        posts: [
            {id: 'user_1', message: 'Hello world!', likesCount: '17'},
            {id: 'user_2', message: 'Hi all!', likesCount: '33'}
        ],
          newPostText:'reactjs'
    },


    dialogsPage: {
        messages: [
            {id: 'user_1', message: 'Hi!'},
            {id: 'user_2', message: 'How are you?'},
            {id: 'user_3', message: 'it/s ok!'},
            {id: 'user_4', message: 'Whats up'},
            {id: 'user_5', message: 'lalala'}],
        dialogs: [
            {
                id: 'user_1',
                name: 'Dima',
                avaUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6UZjQ2K19UO-WC51BmuO3RbyZG0GQPYJYmGYTTna18i1d2Lx"
            },
            {
                id: 'user_2',
                name: 'Andrew',
                avaUser: "data:image/jpeg;base64,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"
            },
            {
                id: 'user_3',
                name: 'Stew',
                avaUser: "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/03/02/ryan-phillippe.png"
            },
            {
                id: 'user_4',
                name: 'Nick',
                avaUser: "https://pbs.twimg.com/media/EB9wiXnU8AAhEvc.jpg"
            },
            {
                id: 'user_5',
                name: 'Max',
                avaUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDscQaWN7atUkgSou-qIxWLEX7UkEe-qLgLXncWDKWfm8V9RpRg"
            }],
        newMessageText:'lalalalaa'

    },

   /* sidebar: {
        friends: [
            {
                id: 'user_1',
                name: 'Dima',
                avaUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6UZjQ2K19UO-WC51BmuO3RbyZG0GQPYJYmGYTTna18i1d2Lx"
            },
            {
                id: 'user_2',
                name: 'Andrew',
                avaUser: "data:image/jpeg;base64,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"
            },
            {
                id: 'user_3',
                name: 'Stew',
                avaUser: "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/03/02/ryan-phillippe.png"
            }
        ]
    }*/
}
export default state;

export let addPost = () => {

    let newPost = {
        id:'user_5',
        message: state.profilePage.newPostText ,
        likesCount: 0
    };
   state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renenderEntireTree (state);

}
export let updateNewPostText = (newText) => {

   state.profilePage.newPostText = newText;
    renenderEntireTree (state);
}

export let addMessage = () => {

    let newMessage = {
        id: 'user_7',
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
}
export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renenderEntireTree (state);
}

