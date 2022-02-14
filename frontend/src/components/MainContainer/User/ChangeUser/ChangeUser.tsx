import React from 'react'
import style from './ChangeUser.module.css'
import {AppStateType} from "../../../../redux/store";
import {connect} from "react-redux";
import {changeUser} from "../../../../redux/users-reducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../../Common/FormsControl/FormsControl";
import {required} from "../../../../utils/utils";
import {UserType} from "../../../../types/types";

type ChangeUserOwnProps = {
    el: UserType
}

type ChangeUserFormValuesType = {
    name: string,
    direction: string,
    skills: string,
    aboutMe: string,
    lookingForAJob: boolean
}

type ChangeUserFormValuesTypeKeys = Extract<keyof ChangeUserFormValuesType, string>

const ChangeUserForm: React.FC<InjectedFormProps<ChangeUserFormValuesType, ChangeUserOwnProps> & ChangeUserOwnProps> = ({
                                                                                                                            handleSubmit,
                                                                                                                            error,
                                                                                                                            el
                                                                                                                        }) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {createField<ChangeUserFormValuesTypeKeys>('New user name...', 'name', [required], Input)}
            {createField<ChangeUserFormValuesTypeKeys>('New direction...', 'direction', [required], Input)}
            {createField<ChangeUserFormValuesTypeKeys>('New skills...', 'skills', [required], Input)}
            {createField<ChangeUserFormValuesTypeKeys>('About me...', 'aboutMe', [required], Input)}
            <div className={style.formFooter}>
                <div className={style.checkbox}>
                    <h6>Looking for a
                        job?</h6> {createField<ChangeUserFormValuesTypeKeys>(undefined, 'lookingForAJob', [], Input, {type: 'checkbox'}, '')}
                </div>
                <div className={style.button}>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

const ChangeUserReduxForm = reduxForm<ChangeUserFormValuesType, ChangeUserOwnProps>({
    form: 'changeUser'
})(ChangeUserForm)

type PropsType = OwnProps & DispatchPropsType

const ChangeUser: React.FC<PropsType> = ({id, deactivate, changeUser, el}) => {

    const onSubmit = (formData: ChangeUserFormValuesType) => {
        changeUser(id, formData.name, formData.direction, formData.skills, formData.aboutMe, formData.lookingForAJob)
        deactivate()
    }

    return (
        <div>
            <ChangeUserReduxForm onSubmit={onSubmit} el={el}/>
        </div>
    )
}

type OwnProps = {
    id: string,
    deactivate: () => void
    el: UserType
}

const mapStateToProps = (state: AppStateType) => ({})

type DispatchPropsType = {
    changeUser: (id: string, name: string, direction: string, skills: string, aboutMe: string, lookingForAJob: boolean) => void
}

export default connect(mapStateToProps, {changeUser})(ChangeUser)