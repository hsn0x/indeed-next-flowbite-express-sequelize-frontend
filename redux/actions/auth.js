const auth = {
    updateIsAuthenticated: (isAuthenticated) => {
        return (dispatch) =>
            dispatch({
                type: "UPDATE_IS_AUTHENTICATED",
                payload: isAuthenticated,
            })
    },
    updateAuth: (payload) => {
        return (dispatch) =>
            dispatch({
                type: "UPDATE_AUTH",
                payload,
            })
    },
    updateProfile: (payload) => {
        return (dispatch) =>
            dispatch({
                type: "UPDATE_PROFILE",
                payload,
            })
    },
    updateEmail: (email) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_EMAIL",
                payload: email,
            })
        }
    },
    updatePassword: (password) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_PASSWORD",
                payload: password,
            })
        }
    },
}

export default auth
