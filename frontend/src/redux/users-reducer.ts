import {UserType} from "../types/types";
import {Dispatch} from 'redux'
import {BaseThunkType, InferActionsType} from "./store";
import {usersAPI} from "../api/users-api";


let initialState = {
    users: [] as Array<UserType>,
    userName: undefined as string | undefined,
    prevUserName: undefined as string | undefined,

}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'PROJECT/FRONTEND/USERS/SET_USERS':
            return {...state, users: action.users}
        case 'PROJECT/FRONTEND/USERS/SET_USER_NAME':
            return {...state, prevUserName: state.userName, userName: action.userName}
        default:
            return state
    }
}

export const actions = {
    setUsers: (users: Array<UserType>) => ({
        type: 'PROJECT/FRONTEND/USERS/SET_USERS',
        users
    } as const),

    setUsersPortion: (usersPortion: Array<UserType>) => ({
        type: 'PROJECT/FRONTEND/USERS/SET_USERS_PORTION',
        usersPortion
    } as const),

    setPagesCount: (pagesCount: number | undefined) => ({
        type: 'PROJECT/FRONTEND/USERS/SET_PAGES_COUNT',
        pagesCount
    } as const),

    setCurrentPage: (currentPage: number) => ({
        type: 'PROJECT/FRONTEND/USERS/SET_CURRENT_PAGE',
        currentPage
    } as const),

    setTotalUsersCount: (totalUsersCount: number | undefined) => ({
        type: 'PROJECT/FRONTEND/USERS/SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const),

    setUserName: (userName: string | undefined) => ({
        type: 'PROJECT/FRONTEND/USERS/SET_USER_NAME',
        userName
    } as const)
}

export const getUsers = (): ThunkType => async (dispatch) => {
    let data = await usersAPI.getUsers()
    dispatch(actions.setUsers(data))
}

export const addUser = (name: string, direction: string, skills: string, aboutMe: string, lookingForAJob: boolean): ThunkType => async (dispatch) => {
    let data = await usersAPI.addUser(name, direction, skills, aboutMe, lookingForAJob)
    dispatch(getUsers())
}

export const deleteUser = (id: string): ThunkType => async (dispatch) => {
    let data = await usersAPI.deleteUser(id)
    dispatch(getUsers())
}

export const changeUser = (id: string, name: string, direction: string, skills: string, aboutMe: string, lookingForAJob: boolean): ThunkType => async (dispatch) => {
    let data = await usersAPI.changeUser(id, name, direction, skills, aboutMe, lookingForAJob)
    dispatch(getUsers())
}

export default usersReducer