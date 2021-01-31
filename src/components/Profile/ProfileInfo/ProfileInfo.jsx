import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div >
                <img className={s.img}
                    src='https://cdn-cms.pgimgs.com/news/2015/07/Maldives-beach.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;