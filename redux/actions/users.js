const users = {
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

export default users
