import { axiosDB } from "../../db/"
import { Notify } from "notiflix"
import {
    updateAuth,
    updateIsAuthenticated,
    updateProfile,
} from "../actions/auth"

const UPDATE_LOGIN_EMAIL = "UPDATE_LOGIN_EMAIL"
const UPDATE_LOGIN_PASSWORD = "UPDATE_LOGIN_PASSWORD"

const initialState = {
    email: "j@me.com",
    password: "qwe",
}

const login = {
    signIn: () => async (dispatch, getState) => {
        const { email, password } = getState().login
        const signInData = {
            email,
            password,
        }
        try {
            const loginResponse = await axiosDB.axiosServer.post(
                "/auth/login",
                signInData
            )
            Notify.success(
                loginResponse.data?.message || "Sign in Successful",
                {
                    position: "right-top",
                    width: "280px",
                    distance: "10px",
                    opacity: 1,
                    timeout: 1000,
                    pauseOnHover: true,
                    keepOnHover: true,
                }
            )
            dispatch({
                type: "UPDATE_LOGIN_IS_AUTHENTICATED",
                payload: loginResponse.data.isAuthenticated,
            })
            const meResponse = await axiosDB.axiosServer.get("/auth/me")
            await axiosDB.axiosClient.post("/auth/signin", meResponse.data)

            return loginResponse
        } catch (error) {
            Notify.failure(error.response?.data?.message || "Sign in error", {
                position: "right-top",
                timeout: 1000,
                pauseOnHover: true,
                keepOnHover: true,
            })
            console.error(error)
            return error.response?.data
        }
    },

    reducer: (state = initialState, action) => {
        switch (action.type) {
            case UPDATE_LOGIN_EMAIL:
                return { ...state, email: action.payload }
            case UPDATE_LOGIN_PASSWORD:
                return { ...state, password: action.payload }
            default:
                return state
        }
    },
}

export default login
