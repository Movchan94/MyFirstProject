import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostAddForm from "./AddPostsForm"

const MyPosts = React.memo(props => {

        let postsElements =
            [...props.posts]
                .reverse()
                .map(p =>
            <Post
                key={p.id}
                message={p.message}
                likesCount={p.likesCount}
            />);
        let newPostElement = React.createRef();

        let addNewPost = (values) => {
            props.addPost(values.NewPostBody)



        }

        return (
            <div className={s.postsBlock}>
                <h3> My posts</h3>
                <div>
                    <PostAddForm onSubmit={addNewPost}/>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )

})

export default MyPosts;