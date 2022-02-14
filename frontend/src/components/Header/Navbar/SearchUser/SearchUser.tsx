import React from 'react'
import {AppStateType} from "../../../../redux/store";
import style from './SearchUser.module.css'
import {connect} from "react-redux";
import {actions} from "../../../../redux/users-reducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../../Common/FormsControl/FormsControl";
import {required} from "../../../../utils/utils";

type SearchUserFormValuesType = {
    userName: string
}

type SearchUserFormValuesTypeKeys = Extract<keyof SearchUserFormValuesType, string>


const SearchUserForm: React.FC<InjectedFormProps<SearchUserFormValuesType>> = ({handleSubmit}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {createField<SearchUserFormValuesTypeKeys>('Write username...', 'userName', [required], Input)}
            <div className={style.button}>
                <button>Search</button>
            </div>
        </form>
    )
}

const SearchUserReduxForm = reduxForm<SearchUserFormValuesType>({
    form: 'searchUser'
})(SearchUserForm)

const SearchUser: React.FC<MapStatePropsType & MapDispatchPropsType & OwnProps> = ({setUserName, deactivate}) => {

    const onSubmit = (formData: SearchUserFormValuesType) => {
        setUserName(formData.userName)
        deactivate()
    }

    return (
        <div>
            <SearchUserReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

type OwnProps = {
    deactivate: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({})

type MapStatePropsType = {}

type MapDispatchPropsType = {
    setUserName: (userName: string | undefined) => void
}

export default connect(mapStateToProps, {setUserName: actions.setUserName})(SearchUser)