const login = {
    updateEmail: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_LOGIN_EMAIL",
                payload,
            })
        }
    },

    updatePassword: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_LOGIN_PASSWORD",
                payload,
            })
        }
    },
}

export default login
