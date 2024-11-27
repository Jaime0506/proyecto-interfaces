import { supabase } from "../../supabase/supabase"
import { UserFormType, UserType } from "../../types"
import { AppDispatch } from "../store"
import { checking, login, logout } from "./authSlice"

export const handleOnLogin = (form: UserFormType) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking())
        console.log(form.email, form.password)
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password
        })
        

        if (error) {
            console.log(error.message)
            dispatch(logout())
            return
        }

        if (!data.user) {
            console.log("No llego data")
            dispatch(logout())
            return
        }
            
        const user_logged:UserType = {
            id: data.user.id,
            email: data.user.email ? data.user.email : '',
            name: ''
        }

        dispatch(login(user_logged))
        return
    }
}

export const handleOnLogout = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking())

        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log("C murio")
            dispatch(logout())
            return
        }

        dispatch(logout())
        return
    }
}

export const handleOnChecking = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checking())

        const { data, error } = await supabase.auth.getUser()

        if (error) {
            console.log(error.message)
            dispatch(logout())
            return
        }

        if (!data.user) {
            console.log("no existe user")
            dispatch(logout())
            return
        }

        const user_logged: UserType = {
            id: data.user.id,
            email: data.user.email ? data.user.email : '',
            name: ''
        }

        dispatch(login(user_logged))
    }
}