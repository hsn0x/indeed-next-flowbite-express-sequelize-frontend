const register = {
    updateFirstName: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_REGISTER_FIRST_NAME",
                payload,
            })
        }
    },
    updateLastName: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_REGISTER_LAST_NAME",
                payload,
            })
        }
    },
    updateUsername: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_REGISTER_USERNAME",
                payload,
            })
        }
    },
    updateEmail: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_REGISTER_EMAIL",
                payload,
            })
        }
    },
    updatePassword: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_REGISTER_PASSWORD",
                payload,
            })
        }
    },

    updatePasswordConfirmed: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "UPDATE_REGISTER_PASSWORD_CONFIRMED",
                payload,
            })
        }
    },
}

export default register
