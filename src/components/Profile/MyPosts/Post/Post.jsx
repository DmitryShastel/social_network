import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e010a148-4d8c-4bdb-b9bf-72b3c40ec9e3/d2vhebq-662d8d9e-98cb-412b-a8a0-36afcd55cbcb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTAxMGExNDgtNGQ4Yy00YmRiLWI5YmYtNzJiM2M0MGVjOWUzXC9kMnZoZWJxLTY2MmQ4ZDllLTk4Y2ItNDEyYi1hOGEwLTM2YWZjZDU1Y2JjYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mpZ8-zRoacmgrrnJ-mIYHE8wg_3q6gf0MTbUOBmYJ9w'

            />
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;