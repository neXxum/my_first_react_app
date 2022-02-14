import React from 'react'
import {AppStateType} from "../../../../redux/store";
import {connect} from "react-redux";
import {addUser} from "../../../../redux/users-reducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../../Common/FormsControl/FormsControl";
import {required} from "../../../../utils/utils";
import style from './AddUser.module.css'

type AddUserFormValuesType = {
    name: string,
    direction: string,
    skills: string,
    aboutMe: string,
    lookingForAJob: boolean
}

type AddUserFormValuesTypeKeys = Extract<keyof AddUserFormValuesType, string>

const AddUserForm: React.FC<InjectedFormProps<AddUserFormValuesType>> =
    ({handleSubmit, error}) => {
        return (
            <form className={style.form} onSubmit={handleSubmit}>
                {createField<AddUserFormValuesTypeKeys>('User name...', 'name', [required], Input)}
                {createField<AddUserFormValuesTypeKeys>('Direction...', 'direction', [required], Input)}
                {createField<AddUserFormValuesTypeKeys>('Skills...', 'skills', [required], Input)}
                {createField<AddUserFormValuesTypeKeys>('About you...', 'aboutMe', [required], Input)}
                <div className={style.formFooter}>
                    <div className={style.checkbox}>
                        <h6>Looking for a
                            job?</h6> {createField<AddUserFormValuesTypeKeys>(undefined, 'lookingForAJob', [], Input, {type: 'checkbox'}, '')}
                    </div>
                    <div className={style.button}>
                        <button>Add</button>
                    </div>


                </div>
            </form>
        )
    }

const AddUserReduxForm = reduxForm<AddUserFormValuesType>({
    form: 'addUser'
})(AddUserForm)

const AddUser: React.FC<MapStatePropsType & MapDispatchPropsType & OwnProps> = ({addUser, deactivate}) => {

    const onSubmit = (formData: AddUserFormValuesType) => {
        let lookingForAJob = !formData.lookingForAJob ? false : formData.lookingForAJob
        addUser(formData.name, formData.direction, formData.skills, formData.aboutMe, lookingForAJob)
        deactivate()
    }

    return (
        <div>
            <AddUserReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type OwnProps = {
    deactivate: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({})

type MapStatePropsType = {}

type MapDispatchPropsType = {
    addUser: (name: string, direction: string, skills: string, aboutMe: string, lookingForAJob: boolean) => void
}

export default connect(mapStateToProps, {addUser})(AddUser)