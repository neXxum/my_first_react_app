import React, {useState} from 'react'
import style from './User.module.css'
import {UserType} from "../../../types/types";
import Modal from "../../Common/Modal/Modal";
import UserInfo from "./UserInfo/UserInfo";
import DeleteUser from "./DeleteUser/DeleteUser";
import ChangeUser from "./ChangeUser/ChangeUser";

const User: React.FC<OwnProps> = ({el}) => {
    const [userInfoActiveModal, setUserInfoActiveModal] = useState(false)
    const [deleteUserActiveModal, setDeleteUserActiveModal] = useState(false)
    const [changeUserActiveModal, setChangeUserActiveModal] = useState(false)

    const activeUserInfoModal = () => {
        setUserInfoActiveModal(true)
    }

    const deactivateUserInfoModal = () => {
        setUserInfoActiveModal(false)
    }

    const activeDeleteUserModal = () => {
        setDeleteUserActiveModal(true)
    }

    const deactivateDeleteUserModal = () => {
        setDeleteUserActiveModal(false)
    }

    const activeChangeUserModal = () => {
        setChangeUserActiveModal(true)
    }

    const deactivateChangeUserModal = () => {
        setChangeUserActiveModal(false)
    }

    return <div>
        <div className={style.user} key={el._id}>

            <div>
                <button className={style.userButton} onClick={activeUserInfoModal}>
                    <div className={style.userName}>{el.name}</div>
                </button>
                <h6>{el.direction}</h6>
            </div>
            <div className={style.deleteOrChange}>
                <button onClick={activeDeleteUserModal}>delete</button>
                <button onClick={activeChangeUserModal}>change</button>
            </div>
        </div>

        <Modal active={userInfoActiveModal} deactivate={deactivateUserInfoModal} title={el.name}>
            <div>
                <UserInfo el={el}/>
            </div>
        </Modal>

        <Modal active={deleteUserActiveModal} deactivate={deactivateDeleteUserModal} title={'Delete user ' + el.name + '?'}>
            <div>
                <DeleteUser id={el._id} deactivate={deactivateDeleteUserModal}/>
            </div>
        </Modal>

        <Modal active={changeUserActiveModal} deactivate={deactivateChangeUserModal} title={'Change user ' + el.name}>
            <div>
                <ChangeUser id={el._id} deactivate={deactivateChangeUserModal} el={el}/>
            </div>
        </Modal>

    </div>
}

type OwnProps = {
    el: UserType
}

export default User