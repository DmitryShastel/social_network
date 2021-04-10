import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    debugger;
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.wrapper}>
            <div >
                <img className={s.img}
                    src='https://cdn-cms.pgimgs.com/news/2015/07/Maldives-beach.jpg'/>
            </div>
            <div className = {s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;