import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType, UserType } from '../../types';

const initialState: AuthType = {
    status: "not-authenticated",
    user: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: { 
        login: (state, action:PayloadAction<UserType>) => {
            state.status = 'authenticated'
            state.user = action.payload
        },
        
        logout: (state) => {
            state.status = 'not-authenticated'
            state.user = null
            state.errorMessage = null
        },

        checking: (state) => {
            state.status = 'checking'
        }
    },
});

export const { login, logout, checking } = authSlice.actions;