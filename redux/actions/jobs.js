const jobs = {
    // FETCH
    fetchRequest: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_FETCH_REQUEST",
            })
        }
    },
    fetchSuccess: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_FETCH_SUCCESS",
                payload,
            })
        }
    },
    fetchFail: (payload) => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_FETCH_FAIL",
                payload,
            })
        }
    },

    // CREATE
    createRequest: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_CREATE_REQUEST",
            })
        }
    },
    createSuccess: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_CREATE_SUCCESS",
            })
        }
    },
    createFail: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_CREATE_FAIL",
            })
        }
    },

    // DELETE
    deleteRequest: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_DELETE_REQUEST",
            })
        }
    },
    deleteSuccess: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_DELETE_SUCCESS",
            })
        }
    },
    deleteFail: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_DELETE_FAIL",
            })
        }
    },
    deleteReset: () => {
        return (dispatch) => {
            dispatch({
                type: "JOBS_DELETE_RESET",
            })
        }
    },
}
export default jobs
