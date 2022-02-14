import React from 'react'
import style from './UserInfo.module.css'
import {UserType} from "../../../../types/types";

type OwnProps = {
    el: UserType
}

const UserInfo: React.FC<OwnProps> = ({el}) => {
    return (
        <div className={style.info}>
            <div className={style.userDescription}>
                <h6>Direction: <p className={style.el}>{el.direction}</p></h6>
            </div>
            <div className={style.userDescription}>
                <h6>Skills: <p className={style.el}>{el.skills}</p></h6>
            </div>
            <div className={style.userDescription}>
                <h6>About me: <p className={style.el}>{el.aboutMe}</p></h6>
            </div>
            <div className={style.userDescription}>
                <h6>Looking for a job: <p className={style.el}>{el.lookingForAJob ? 'yes' : 'no'}</p></h6>
            </div>
        </div>
    )
}

export default UserInfo