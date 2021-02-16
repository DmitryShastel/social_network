import React from "react";
import styles from './users.module.css'

export let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://2.bp.blogspot.com/-w1KcztzMZTQ/VnXQHtY39GI/AAAAAAAAYQM/iB_PhFgDW9Y/s1600/bane.jpg',
                followed: false,
                fullName: 'Sasha',
                status: 'boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://2.bp.blogspot.com/-w1KcztzMZTQ/VnXQHtY39GI/AAAAAAAAYQM/iB_PhFgDW9Y/s1600/bane.jpg',
                followed: true,
                fullName: 'Dima',
                status: 'I am boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://2.bp.blogspot.com/-w1KcztzMZTQ/VnXQHtY39GI/AAAAAAAAYQM/iB_PhFgDW9Y/s1600/bane.jpg',
                followed: false,
                fullName: 'Ivan',
                status: 'I am boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick = {() => {props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick = {() => {props.follow(u.id) } }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}