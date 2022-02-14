import {instance} from "./api";
import {UserType} from "../types/types";

export const usersAPI = {
    getUsers() {
        debugger
        return instance.get<Array<UserType>>("users")
            .then(res => res.data)
    },

    addUser(name: string, direction: string, skills: string, aboutMe: string, lookingForAJob: boolean) {
        return instance.post<any>("users", JSON.stringify({name, direction, skills, aboutMe, lookingForAJob}))
            .then(res => res.data)
    },

    deleteUser(id: string) {
        return instance.delete<any>(`users/${id}`)
            .then(res => res.data)
    },

    changeUser(id: string, name: string, direction: string, skills: string, aboutMe: string, lookingForAJob: boolean) {
        debugger
        return instance.put<any>('users', JSON.stringify({_id: id, name, direction, skills, aboutMe, lookingForAJob}))
            .then(res => res.data)
    }
}