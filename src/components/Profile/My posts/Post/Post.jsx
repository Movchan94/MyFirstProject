import React from 'react';
import s from './Post.module.css';
import {tsPropertySignature} from '@babel/types';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg'/>
            {props.message}

            <div>

                <span>like: {props.likesCount}</span>

            </div>

        </div>
    )
}
export default Post;