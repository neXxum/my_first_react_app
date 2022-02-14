import React, {ComponentType, useState} from 'react'
import style from './Navbar.module.css'
import Modal from "../../Common/Modal/Modal";
import AddUser from "./AddUser/AddUser";
import SearchUser from "./SearchUser/SearchUser";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {actions} from "../../../redux/users-reducer";

type PropsType = MapPropsType & DispatchPropsType

const Navbar: React.FC<PropsType> = ({setUserName, userName, prevUserName}) => {
    const [addUserActiveModal, setAddUserActiveModal] = useState(false)
    const [searchUserActiveModal, setSearchUserActiveModal] = useState(false)

    const activeAddUserModal = () => {
        setAddUserActiveModal(true)
    }

    const deactivateAddUserModal = () => {
        setAddUserActiveModal(false)
    }

    const activeSearchUserModal = () => {
        setSearchUserActiveModal(true)
    }

    const deactivateSearchUserModal = () => {
        setSearchUserActiveModal(false)
    }


    return (
        <div>
            <nav className={style.nav}>
                <button className={style.btn} onClick={activeAddUserModal}>Add user</button>
                <button className={style.btn} onClick={activeSearchUserModal}>Search user</button>

                {
                    userName ?
                        <div className={style.button}>
                            <button onClick={() => setUserName(undefined)}>Return to all users</button>
                        </div> :
                        <div className={style.button}>
                            <button onClick={() => setUserName(prevUserName)}>Return
                                to {prevUserName}</button>
                        </div>
                }
            </nav>
            <Modal active={addUserActiveModal} deactivate={deactivateAddUserModal} title={'Add user'}>
                <div>
                    <AddUser deactivate={deactivateAddUserModal}/>
                </div>
            </Modal>
            <Modal active={searchUserActiveModal} deactivate={deactivateSearchUserModal} title={'Search user'}>
                <div>
                    <SearchUser deactivate={deactivateSearchUserModal}/>
                </div>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    userName: state.usersReducer.userName,
    prevUserName: state.usersReducer.prevUserName,
})

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    setUserName: (userName: string | undefined) => void
}

export default connect(mapStateToProps, {setUserName: actions.setUserName})(Navbar)