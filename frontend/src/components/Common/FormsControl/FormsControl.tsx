import React from 'react'
import style from './FormsControl.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from '../../../utils/utils'

type FormsControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormsControl: React.FC<FormsControlPropsType>
    = ({meta: {touched, error}, children}) => {

    const hasError = touched && error

    return (
        <div>
            <div>
                {children}
            </div>
            {hasError && <span className={style.error}>{error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormsControl {...props}>
            <input {...input} {...restProps}/>
        </FormsControl>
    )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators}
                   component={component}
                   {...props}/> {text}
        </div>
    )
}