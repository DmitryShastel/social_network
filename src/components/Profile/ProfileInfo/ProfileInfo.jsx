import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div >
            <div >
                <img className={s.img}
                    src='https://philhollett.com.au/wp-content/uploads/DUN36e-Old-Dunsborough_1500px.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;