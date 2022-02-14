import React from 'react'
import style from './DeleteUser.module.css'
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/store";
import {deleteUser} from "../../../../redux/users-reducer";

type PropsType = OwnProps & DispatchPropsType

const DeleteUser: React.FC<PropsType> = ({id, deactivate, deleteUser}) => {
    return (
        <div className={style.deleteUser}>

            <div>
                <button onClick={deactivate}>No</button>
            </div>

            <div>
                <button onClick={() => {
                    deleteUser(id)
                    return deactivate()
                }}>Yes
                </button>
            </div>

        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({})

type OwnProps = {
    id: string,
    deactivate: () => void
}

type DispatchPropsType = {
    deleteUser: (id: string) => void
}

export default connect(mapStateToProps, {deleteUser})(DeleteUser)