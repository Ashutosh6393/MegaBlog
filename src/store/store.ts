import {configureStore} from "@reduxjs/toolkit"
import authSlice  from "./features/authSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export const store = configureStore({
    reducer: {
        auth: authSlice,
    }
})

export const useAppDispatch: ()=> typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
