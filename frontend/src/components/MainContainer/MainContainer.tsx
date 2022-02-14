import React, {Component} from 'react'
import style from './MainContainer.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {withRouter} from "react-router-dom";
import {actions, getUsers} from "../../redux/users-reducer";
import User from "./User/User";

type PropsType = MapPropsType & DispatchPropsType

let a: number = 0

class MainContainer extends Component<PropsType> {


    componentDidMount() {
        this.props.getUsers()
    }

    componentDidUpdate(prevProps: PropsType, prevState: AppStateType) {
        debugger
        if (JSON.stringify(this.props.users) !== JSON.stringify(prevProps.users)) {
            this.props.getUsers()
        }
    }


    render() {
        return <>
            {this.props.users.length === 0 ? <div className={style.notFound}>No users or not loaded</div> : null}

            <div className={style.users}>
                <div>

                    {
                        this.props.userName ?

                            this.props.users.map((el, index, array) => {
                                if (el.name === this.props.userName) {
                                    a++
                                    return <User el={el}/>
                                } else if (index === array.length - 1 && a === 0) {
                                    return <div className={style.notFound}>
                                        <div>User not found</div>
                                    </div>
                                }
                            })
                            :
                            this.props.users.map(el => {
                                return <User el={el}/>
                            })
                    }
                </div>
            </div>
        </>
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUsers: () => void,
    setUserName: (userName: string | undefined) => void
}

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersReducer.users,
    userName: state.usersReducer.userName,
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsers}),
    withRouter
)(MainContainer)